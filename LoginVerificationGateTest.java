package com.esports.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;

import com.esports.user_service.DTO.LoginRequestDTO;
import com.esports.user_service.DTO.LoginResponseDTO;
import com.esports.user_service.entity.BrandDetails;
import com.esports.user_service.entity.OrganizerDetails;
import com.esports.user_service.entity.Role;
import com.esports.user_service.entity.User;
import com.esports.user_service.exception.AccountNotVerifiedException;
import com.esports.user_service.repository.UserRepository;
import com.esports.user_service.service.JwtService;
import com.esports.user_service.service.UserService;

/*
 * Covers the verification gate added for the "Restrict Login for
 * Unverified Accounts" change request.
 *
 * The behaviour under test is: a BRAND or ORGANIZER whose profile is
 * not APPROVED must never reach token generation, while every other
 * role and every already-approved account logs in as before.
 */
@ExtendWith(MockitoExtension.class)
class LoginVerificationGateTest {

    private static final String USERNAME = "nova_gaming";
    private static final String PASSWORD = "Correct#Password1";

    @Mock
    private UserRepository userRepository;

    @Mock
    private JwtService jwtService;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private UserService userService;

    private LoginRequestDTO request;

    @BeforeEach
    void setUp() {

        request = new LoginRequestDTO();
        request.setUsername(USERNAME);
        request.setPassword(PASSWORD);

        lenient()
                .when(authenticationManager.authenticate(any()))
                .thenReturn(authentication);

        lenient()
                .when(authentication.isAuthenticated())
                .thenReturn(true);
    }

    /*
     * ---------------------------------------------------------
     * Helpers
     * ---------------------------------------------------------
     */

    private User userWithRole(String roleName) {

        Role role = new Role();
        role.setRoleName(roleName);
        role.setPermissions(new HashSet<>());

        Set<Role> roles = new HashSet<>();
        roles.add(role);

        User user = new User();
        user.setId("user-1");
        user.setUsername(USERNAME);
        user.setEmail("owner@novagaming.test");
        user.setRoles(roles);

        return user;
    }

    private User brandUserWithStatus(String status) {

        User user = userWithRole("BRAND");

        BrandDetails brand = new BrandDetails();
        brand.setVerificationStatus(status);
        user.setBrandDetails(brand);

        return user;
    }

    private User organizerUserWithStatus(String status) {

        User user = userWithRole("ORGANIZER");

        OrganizerDetails organizer = new OrganizerDetails();
        organizer.setVerificationStatus(status);
        user.setOrganizerDetails(organizer);

        return user;
    }

    private void stubLookups(User user) {

        when(userRepository.findByUsername(USERNAME))
                .thenReturn(Optional.of(user));

        lenient()
                .when(userRepository
                        .findVerificationDetailsByUsername(USERNAME))
                .thenReturn(Optional.of(user));
    }

    /*
     * ---------------------------------------------------------
     * Blocked cases
     * ---------------------------------------------------------
     */

    @Test
    @DisplayName("Pending brand is denied login")
    void pendingBrandIsDenied() {

        stubLookups(brandUserWithStatus("PENDING"));

        AccountNotVerifiedException thrown =
                assertThrows(
                        AccountNotVerifiedException.class,
                        () -> userService.login(request));

        assertEquals(
                UserService.VERIFICATION_PENDING_MESSAGE,
                thrown.getMessage());
    }

    @Test
    @DisplayName("Pending organizer is denied login")
    void pendingOrganizerIsDenied() {

        stubLookups(organizerUserWithStatus("PENDING"));

        assertThrows(
                AccountNotVerifiedException.class,
                () -> userService.login(request));
    }

    @Test
    @DisplayName("No token is generated for a blocked account")
    void noTokenIsGeneratedWhenBlocked() {

        stubLookups(brandUserWithStatus("PENDING"));

        assertThrows(
                AccountNotVerifiedException.class,
                () -> userService.login(request));

        verify(jwtService, never()).generateToken(any(User.class));
    }

    @Test
    @DisplayName("Rejected brand gets the rejection message")
    void rejectedBrandIsDenied() {

        stubLookups(brandUserWithStatus("REJECTED"));

        AccountNotVerifiedException thrown =
                assertThrows(
                        AccountNotVerifiedException.class,
                        () -> userService.login(request));

        assertEquals(
                "Your account verification was not approved. "
                        + "Please contact support for assistance.",
                thrown.getMessage());
    }

    @Test
    @DisplayName("Unknown status fails closed")
    void unknownStatusIsDenied() {

        stubLookups(brandUserWithStatus("SUSPENDED"));

        assertThrows(
                AccountNotVerifiedException.class,
                () -> userService.login(request));
    }

    @Test
    @DisplayName("Null status fails closed")
    void nullStatusIsDenied() {

        stubLookups(brandUserWithStatus(null));

        assertThrows(
                AccountNotVerifiedException.class,
                () -> userService.login(request));
    }

    @Test
    @DisplayName("Brand with no submitted profile is denied")
    void missingBrandProfileIsDenied() {

        User user = userWithRole("BRAND");
        user.setBrandDetails(null);

        stubLookups(user);

        assertThrows(
                AccountNotVerifiedException.class,
                () -> userService.login(request));
    }

    /*
     * ---------------------------------------------------------
     * Allowed cases - backward compatibility
     * ---------------------------------------------------------
     */

    @Test
    @DisplayName("Approved brand logs in normally")
    void approvedBrandIsAllowed() {

        User user = brandUserWithStatus("APPROVED");
        stubLookups(user);

        when(jwtService.generateToken(user))
                .thenReturn("signed.jwt.token");

        LoginResponseDTO response = userService.login(request);

        assertNotNull(response);
        assertEquals("signed.jwt.token", response.getToken());
    }

    @Test
    @DisplayName("Approved organizer logs in normally")
    void approvedOrganizerIsAllowed() {

        User user = organizerUserWithStatus("approved");
        stubLookups(user);

        when(jwtService.generateToken(user))
                .thenReturn("signed.jwt.token");

        assertNotNull(userService.login(request));
    }

    @Test
    @DisplayName("Regular user skips the verification gate")
    void regularUserIsUnaffected() {

        User user = userWithRole("USER");

        when(userRepository.findByUsername(USERNAME))
                .thenReturn(Optional.of(user));

        when(jwtService.generateToken(user))
                .thenReturn("signed.jwt.token");

        assertNotNull(userService.login(request));

        verify(userRepository, never())
                .findVerificationDetailsByUsername(any());
    }

    @Test
    @DisplayName("Admin skips the verification gate")
    void adminIsUnaffected() {

        User user = userWithRole("ADMIN");

        when(userRepository.findByUsername(USERNAME))
                .thenReturn(Optional.of(user));

        when(jwtService.generateToken(user))
                .thenReturn("signed.jwt.token");

        assertNotNull(userService.login(request));
    }
}
