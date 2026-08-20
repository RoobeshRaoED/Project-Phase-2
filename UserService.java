package com.esports.user_service.service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.esports.user_service.DTO.AccountProfileResponseDTO;
import com.esports.user_service.DTO.ApiResponse;
import com.esports.user_service.DTO.BrandDetailsDTO;
import com.esports.user_service.DTO.LoginRequestDTO;
import com.esports.user_service.DTO.LoginResponseDTO;
import com.esports.user_service.DTO.OrganizerDetailsResponseDTO;
import com.esports.user_service.DTO.RegisterUserRequestDTO;
import com.esports.user_service.DTO.RegisterUserResponseDTO;
import com.esports.user_service.DTO.UserProfileDTO;
import com.esports.user_service.DTO.UserResponseDTO;
import com.esports.user_service.entity.BrandDetails;
import com.esports.user_service.entity.OrganizerDetails;
import com.esports.user_service.entity.Role;
import com.esports.user_service.entity.User;
import com.esports.user_service.entity.UserPrinciple;
import com.esports.user_service.entity.UserProfile;
import com.esports.user_service.enums.ProfileType;
import com.esports.user_service.enums.StatusMaster;
import com.esports.user_service.exception.AccountNotVerifiedException;
import com.esports.user_service.exception.InvalidEmailException;
import com.esports.user_service.exception.InvalidMobileNumberException;
import com.esports.user_service.exception.InvalidPasswordException;
import com.esports.user_service.exception.ResourceAlreadyExistsException;
import com.esports.user_service.exception.ResourceNotFoundException;
import com.esports.user_service.repository.RoleRepository;
import com.esports.user_service.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder(12);

    /*
     * Development-only OTP.
     *
     * Replace this with generated OTPs stored against the exact
     * email/mobile number before production use.
     */
    private static final String DEFAULT_OTP = "123456";

    /*
     * =========================================================
     * LOGIN
     * =========================================================
     */

    public LoginResponseDTO login(
            LoginRequestDTO request) {

        if (request == null) {
            throw new IllegalArgumentException(
                    "Login details are required."
            );
        }

        if (
            request.getUsername() == null ||
            request.getUsername().isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Username is required."
            );
        }

        if (
            request.getPassword() == null ||
            request.getPassword().isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Password is required."
            );
        }

        String username =
                request.getUsername().trim();

        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                username,
                                request.getPassword()
                        )
                );

        if (!authentication.isAuthenticated()) {
            throw new InvalidPasswordException(
                    "Invalid username or password."
            );
        }

        User user =
                userRepository
                        .findByUsername(username)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "User not found."
                                )
                        );

        /*
         * CR: Restrict Login for Unverified Accounts.
         *
         * Brand and Organizer accounts must be verified before a
         * session token is issued. This runs after credential
         * authentication so an unverified caller still cannot probe
         * which usernames exist.
         */
        verifyAccountIsApproved(
                username,
                mapRoleNames(user)
        );

        String token =
                jwtService.generateToken(user);

        List<String> roles =
                user.getRoles() == null
                        ? Collections.emptyList()
                        : user.getRoles()
                                .stream()
                                .map(Role::getRoleName)
                                .filter(roleName ->
                                        roleName != null &&
                                        !roleName.isBlank()
                                )
                                .toList();

        return new LoginResponseDTO(
                token,
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                roles
        );
    }

    /*
     * =========================================================
     * EMAIL OTP
     * =========================================================
     */

    public ApiResponse sendEmailOtp(
            String email) {

        String normalizedEmail =
                normalizeEmail(email);

        if (!isValidEmail(normalizedEmail)) {
            throw new InvalidEmailException(
                    "Invalid email format."
            );
        }

        if (
            userRepository.existsByEmail(
                    normalizedEmail
            )
        ) {
            return new ApiResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Email already registered.",
                    null
            );
        }

        /*
         * Development only.
         *
         * Never return or print the OTP in production.
         */
        System.out.println(
                "EMAIL OTP: " + DEFAULT_OTP
        );

        return new ApiResponse(
                HttpStatus.OK.value(),
                "OTP sent successfully.",
                DEFAULT_OTP
        );
    }

    public ApiResponse verifyEmailOtp(
            String otp) {

        if (
            otp == null ||
            otp.isBlank()
        ) {
            return new ApiResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Email OTP is required.",
                    null
            );
        }

        if (
            !DEFAULT_OTP.equals(
                    otp.trim()
            )
        ) {
            return new ApiResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Invalid OTP.",
                    null
            );
        }

        return new ApiResponse(
                HttpStatus.OK.value(),
                "Email verified successfully.",
                null
        );
    }

    /*
     * =========================================================
     * MOBILE OTP
     * =========================================================
     */

    public ApiResponse sendMobileOtp(
            String mobileNumber) {

        String normalizedMobileNumber =
                normalizeMobileNumber(
                        mobileNumber
                );

        validateMobileNumber(
                normalizedMobileNumber
        );

        if (
            userRepository.existsByMobileNumber(
                    normalizedMobileNumber
            )
        ) {
            return new ApiResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Mobile number already registered.",
                    null
            );
        }

        /*
         * Development only.
         *
         * Never return or print the OTP in production.
         */
        System.out.println(
                "MOBILE OTP: " + DEFAULT_OTP
        );

        return new ApiResponse(
                HttpStatus.OK.value(),
                "OTP sent successfully.",
                DEFAULT_OTP
        );
    }

    public ApiResponse verifyMobileOtp(
            String otp) {

        if (
            otp == null ||
            otp.isBlank()
        ) {
            return new ApiResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Mobile OTP is required.",
                    null
            );
        }

        if (
            !DEFAULT_OTP.equals(
                    otp.trim()
            )
        ) {
            return new ApiResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Invalid OTP.",
                    null
            );
        }

        return new ApiResponse(
                HttpStatus.OK.value(),
                "Mobile verified successfully.",
                null
        );
    }

    /*
     * =========================================================
     * REGISTRATION
     * =========================================================
     */

    @Transactional
    public RegisterUserResponseDTO register(
            RegisterUserRequestDTO request,
            String roleName) {

        validateRegistrationRequest(request);

        String normalizedUsername =
                request.getUsername().trim();

        String normalizedEmail =
                normalizeEmail(
                        request.getEmail()
                );

        String normalizedMobileNumber =
                normalizeMobileNumber(
                        request.getMobileNumber()
                );

        String normalizedRoleName =
                normalizeRegistrationRole(
                        roleName
                );

        if (
            userRepository.existsByUsername(
                    normalizedUsername
            )
        ) {
            throw new ResourceAlreadyExistsException(
                    "Username already exists."
            );
        }

        if (
            userRepository.existsByEmail(
                    normalizedEmail
            )
        ) {
            throw new ResourceAlreadyExistsException(
                    "Email already exists."
            );
        }

        if (
            userRepository.existsByMobileNumber(
                    normalizedMobileNumber
            )
        ) {
            throw new ResourceAlreadyExistsException(
                    "Mobile number already exists."
            );
        }

        if (!isValidEmail(normalizedEmail)) {
            throw new InvalidEmailException(
                    "Invalid email format."
            );
        }

        validateMobileNumber(
                normalizedMobileNumber
        );

        validatePassword(
                request.getPassword()
        );

        Role role =
                roleRepository
                        .findByRoleName(
                                normalizedRoleName
                        )
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Role not found: " +
                                        normalizedRoleName
                                )
                        );

        LocalDateTime currentTime =
                LocalDateTime.now();

        User user = new User();

        user.setUsername(
                normalizedUsername
        );

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setEmail(
                normalizedEmail
        );

        user.setMobileNumber(
                normalizedMobileNumber
        );

        /*
         * These values are currently set after the frontend
         * completes the OTP endpoints.
         *
         * For production, verify the email and mobile against a
         * backend OTP verification record before setting true.
         */
        user.setEmailVerified(true);
        user.setMobileVerifed(true);

        /*
         * The account has been created, but the role-specific
         * profile remains incomplete.
         */
        user.setStatus(
                StatusMaster.PENDING
        );

        user.setCreatedAt(
                currentTime
        );

        user.setUpdatedAt(
                currentTime
        );

        user.getRoles().add(role);

        User savedUser =
                userRepository.save(user);

        return mapRegistrationResponse(
                savedUser,
                normalizedRoleName
        );
    }

    private RegisterUserResponseDTO
            mapRegistrationResponse(
                    User user,
                    String roleName) {

        RegisterUserResponseDTO response =
                new RegisterUserResponseDTO();

        response.setUserId(
                user.getId()
        );

        response.setUsername(
                user.getUsername()
        );

        response.setEmail(
                user.getEmail()
        );

        response.setMobileNumber(
                user.getMobileNumber()
        );

        response.setRoleName(
                roleName
        );

        response.setRegistrationStatus(
                user.getStatus()
        );

        response.setRegistrationToken(jwtService.generateToken(user));

        return response;
    }

    private void validateRegistrationRequest(
            RegisterUserRequestDTO request) {

        if (request == null) {
            throw new IllegalArgumentException(
                    "Registration details are required."
            );
        }

        if (
            request.getUsername() == null ||
            request.getUsername().isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Username is required."
            );
        }

        int usernameLength =
                request.getUsername()
                        .trim()
                        .length();

        if (
            usernameLength < 4 ||
            usernameLength > 50
        ) {
            throw new IllegalArgumentException(
                    "Username must contain between 4 and 50 characters."
            );
        }

        if (
            request.getEmail() == null ||
            request.getEmail().isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Email is required."
            );
        }

        if (
            request.getMobileNumber() == null ||
            request.getMobileNumber().isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Mobile number is required."
            );
        }

        if (
            request.getPassword() == null ||
            request.getPassword().isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Password is required."
            );
        }
    }

    private void validateMobileNumber(
            String mobileNumber) {

        /*
         * This corrects the inverted conditions that were in the
         * previous sendMobileOtp implementation.
         */
        if (!mobileNumber.matches("\\d+")) {
            throw new InvalidMobileNumberException(
                    "Mobile number must contain only digits."
            );
        }

        if (!mobileNumber.matches("^\\d{10}$")) {
            throw new InvalidMobileNumberException(
                    "Mobile number must be exactly 10 digits."
            );
        }

        /*
         * Use this stricter check if Indian mobile numbers must
         * begin with 6, 7, 8, or 9:
         *
         * if (!mobileNumber.matches("^[6-9]\\d{9}$")) {
         *     throw new InvalidMobileNumberException(
         *         "Enter a valid mobile number."
         *     );
         * }
         */
    }

    private void validatePassword(
            String password) {

        if (password.length() < 8) {
            throw new InvalidPasswordException(
                    "Password must contain at least 8 characters."
            );
        }

        if (password.length() > 100) {
            throw new InvalidPasswordException(
                    "Password cannot exceed 100 characters."
            );
        }

        if (!password.matches(".*[A-Z].*")) {
            throw new InvalidPasswordException(
                    "Password must contain at least one uppercase letter."
            );
        }

        if (!password.matches(".*[a-z].*")) {
            throw new InvalidPasswordException(
                    "Password must contain at least one lowercase letter."
            );
        }

        if (!password.matches(".*[0-9].*")) {
            throw new InvalidPasswordException(
                    "Password must contain at least one number."
            );
        }

        if (
            !password.matches(
                    ".*[^A-Za-z0-9].*"
            )
        ) {
            throw new InvalidPasswordException(
                    "Password must contain at least one special character."
            );
        }
    }

    private String normalizeRegistrationRole(
            String roleName) {

        if (
            roleName == null ||
            roleName.isBlank()
        ) {
            throw new IllegalArgumentException(
                    "Account type is required."
            );
        }

        String normalizedRoleName =
                roleName.trim()
                        .toUpperCase(
                                Locale.ROOT
                        );

        return switch (normalizedRoleName) {

            case "USER",
                 "BRAND",
                 "ORGANIZER" ->
                    normalizedRoleName;

            default ->
                    throw new IllegalArgumentException(
                            "Unsupported registration role: " +
                            normalizedRoleName
                    );
        };
    }

    /*
     * =========================================================
     * USER RETRIEVAL
     * =========================================================
     */

    public Optional<User> getUserById(
            String id) {

        if (
            id == null ||
            id.isBlank()
        ) {
            throw new IllegalArgumentException(
                    "User ID is required."
            );
        }

        return userRepository.findById(
                id.trim()
        );
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public List<UserResponseDTO> getUsers() {

        return userRepository
                .findAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    private UserResponseDTO convertToDto(
            User user) {

        UserResponseDTO dto =
                new UserResponseDTO();

        dto.setUserId(
                user.getId()
        );

        dto.setUsername(
                user.getUsername()
        );

        dto.setEmail(
                user.getEmail()
        );

        dto.setMobileNumber(
                user.getMobileNumber()
        );

        dto.setStatus(
                user.getStatus()
        );

        dto.setEmailVerified(
                Boolean.TRUE.equals(
                        user.getEmailVerified()
                )
        );

        dto.setMobileVerified(
                Boolean.TRUE.equals(
                        user.getMobileVerifed()
                )
        );

        dto.setCreatedAt(
                user.getCreatedAt()
        );

        dto.setRoles(
                mapRoleNames(user)
        );

        return dto;
    }

    /*
     * =========================================================
     * COMMON PROFILE
     * =========================================================
     */

    @Transactional
    public AccountProfileResponseDTO
            getProfileByUserId(
                    ProfileType profileType) {

        if (profileType == null) {
            throw new IllegalArgumentException(
                    "Profile type is required."
            );
        }

        UserPrinciple userPrinciple =
                getAuthenticatedUserPrinciple();

        User user =
                userRepository
                        .findCompleteProfileByUserId(
                                userPrinciple.getUserId()
                        )
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "User not found with ID: " +
                                        userPrinciple.getUserId()
                                )
                        );

        validateRequestedProfile(
                user,
                profileType
        );

        AccountProfileResponseDTO response =
                mapBasicAccountDetails(user);

        response.setProfileType(
                profileType
        );

        response.setDetails(
                mapProfileDetails(
                        user,
                        profileType
                )
        );

        return response;
    }

    private Object mapProfileDetails(
            User user,
            ProfileType profileType) {

        return switch (profileType) {

            case ORGANIZER ->
                    mapOrganizerDetails(
                            user.getOrganizerDetails()
                    );

            case BRAND ->
                    mapBrandDetails(
                            user.getBrandDetails()
                    );

            case USER ->
                    mapUserProfile(
                            user.getUserProfile()
                    );

            /*
             * Influencers use the common UserProfile entity.
             */
            case INFLUENCER ->
                    mapUserProfile(
                            user.getUserProfile()
                    );
        };
    }

    private AccountProfileResponseDTO
            mapBasicAccountDetails(
                    User user) {

        AccountProfileResponseDTO response =
                new AccountProfileResponseDTO();

        response.setId(
                user.getId()
        );

        response.setUsername(
                user.getUsername()
        );

        response.setEmail(
                user.getEmail()
        );

        response.setEmailVerified(
                Boolean.TRUE.equals(
                        user.getEmailVerified()
                )
        );

        response.setMobileNumber(
                user.getMobileNumber()
        );

        response.setMobileVerified(
                Boolean.TRUE.equals(
                        user.getMobileVerifed()
                )
        );

        response.setStatus(
                user.getStatus()
        );

        response.setCreatedAt(
                user.getCreatedAt()
        );

        response.setUpdatedAt(
                user.getUpdatedAt()
        );

        response.setRoles(
                mapRoleNames(user)
        );

        return response;
    }

    /*
     * =========================================================
     * USER PROFILE MAPPING
     * =========================================================
     */

    private UserProfileDTO mapUserProfile(
            UserProfile userProfile) {

        if (userProfile == null) {
            return null;
        }

        UserProfileDTO response =
                new UserProfileDTO();

        response.setId(
                userProfile.getId()
        );

        response.setFirstName(
                userProfile.getFirstName()
        );

        response.setLastName(
                userProfile.getLastName()
        );

        response.setStatus(
                userProfile.getStatus()
        );

        if (userProfile.getUser() != null) {
            response.setUserId(
                    userProfile
                            .getUser()
                            .getId()
            );
        }

        return response;
    }

    /*
     * =========================================================
     * ORGANIZER MAPPING
     * =========================================================
     */

    private OrganizerDetailsResponseDTO
            mapOrganizerDetails(
                    OrganizerDetails organizerDetails) {

        if (organizerDetails == null) {
            return null;
        }

        OrganizerDetailsResponseDTO response =
                new OrganizerDetailsResponseDTO();

        response.setId(
                organizerDetails.getId()
        );

        /*
         * These properties contain file-service IDs.
         * Their names remain unchanged as requested.
         */
        response.setGovernmentIdUri(
                organizerDetails
                        .getGovernmentIdUri()
        );

        response.setSelfieVerificationUri(
                organizerDetails
                        .getSelfieVerificationUri()
        );

        response.setVerificationStatus(
                organizerDetails
                        .getVerificationStatus()
        );

        response.setVerifiedAt(
                organizerDetails.getVerifiedAt()
        );

        response.setCreatedAt(
                organizerDetails.getCreatedAt()
        );

        response.setUpdatedAt(
                organizerDetails.getUpdatedAt()
        );

        if (organizerDetails.getUser() != null) {
            response.setUserId(
                    organizerDetails
                            .getUser()
                            .getId()
            );
        }

        return response;
    }

    /*
     * =========================================================
     * BRAND MAPPING
     * =========================================================
     */

    private BrandDetailsDTO mapBrandDetails(
            BrandDetails brandDetails) {

        if (brandDetails == null) {
            return null;
        }

        BrandDetailsDTO response =
                new BrandDetailsDTO();

        response.setId(
                brandDetails.getId()
        );

        response.setBrandName(
                brandDetails.getBrandName()
        );

        response.setMobileNumber(
                brandDetails.getMobileNumber()
        );

        response.setWebsiteUrl(
                brandDetails.getWebsiteUrl()
        );

        response.setLegalEntityIdentifier(
                brandDetails
                        .getLegalEntityIdentifier()
        );

        response.setBusinessAddress(
                brandDetails
                        .getBusinessAddress()
        );

        response.setVerificationStatus(
                brandDetails
                        .getVerificationStatus()
        );

        /*
         * This fixes the previous bug where setUpdatedAt was
         * called twice and createdAt was never assigned.
         */
        response.setCreatedAt(
                brandDetails.getCreatedAt()
        );

        response.setUpdatedAt(
                brandDetails.getUpdatedAt()
        );

        if (brandDetails.getUser() != null) {
            response.setUserId(
                    brandDetails
                            .getUser()
                            .getId()
            );
        }

        return response;
    }

    /*
     * =========================================================
     * PROFILE VALIDATION
     * =========================================================
     */

    private void validateRequestedProfile(
            User user,
            ProfileType profileType) {

        switch (profileType) {

            case ORGANIZER -> {
                if (
                    user.getOrganizerDetails() ==
                    null
                ) {
                    throw new ResourceNotFoundException(
                            "Organizer details were not found for this user."
                    );
                }
            }

            case BRAND -> {
                if (
                    user.getBrandDetails() ==
                    null
                ) {
                    throw new ResourceNotFoundException(
                            "Brand details were not found for this user."
                    );
                }
            }

            case USER -> {
                if (
                    user.getUserProfile() ==
                    null
                ) {
                    throw new ResourceNotFoundException(
                            "User profile details were not found."
                    );
                }
            }

            case INFLUENCER -> {
                UserProfile userProfile =
                        user.getUserProfile();

                if (userProfile == null) {
                    throw new ResourceNotFoundException(
                            "User profile details were not found."
                    );
                }

                if (
                    !Boolean.TRUE.equals(
                            userProfile
                                    .getIsInfluencer()
                    )
                ) {
                    throw new IllegalStateException(
                            "This user is not registered as an influencer."
                    );
                }
            }
        }
    }

    private Set<String> mapRoleNames(
            User user) {

        if (
            user.getRoles() == null ||
            user.getRoles().isEmpty()
        ) {
            return Collections.emptySet();
        }

        return user.getRoles()
                .stream()
                .map(Role::getRoleName)
                .filter(roleName ->
                        roleName != null &&
                        !roleName.isBlank()
                )
                .collect(
                        Collectors.toSet()
                );
    }

    /*
     * =========================================================
     * ACCOUNT VERIFICATION GATE
     * =========================================================
     */

    private void verifyAccountIsApproved(
            String username,
            Set<String> roleNames) {

        boolean isBrand =
                roleNames.contains("BRAND");

        boolean isOrganizer =
                roleNames.contains("ORGANIZER");

        /*
         * Regular users, influencers and admins are not subject to
         * profile verification.
         */
        if (!isBrand && !isOrganizer) {
            return;
        }

        /*
         * The profile associations are LAZY and login() runs outside
         * a transaction, so they are re-read through a fetch-join
         * query rather than navigated from the previous entity.
         */
        User user =
                userRepository
                        .findVerificationDetailsByUsername(
                                username
                        )
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "User not found."
                                )
                        );

        if (isBrand) {

            BrandDetails brandDetails =
                    user.getBrandDetails();

            if (brandDetails == null) {
                throw new AccountNotVerifiedException(
                        buildPendingMessage("brand")
                );
            }

            requireApprovedStatus(
                    brandDetails.getVerificationStatus(),
                    "brand"
            );
        }

        if (isOrganizer) {

            OrganizerDetails organizerDetails =
                    user.getOrganizerDetails();

            if (organizerDetails == null) {
                throw new AccountNotVerifiedException(
                        buildPendingMessage("organizer")
                );
            }

            requireApprovedStatus(
                    organizerDetails.getVerificationStatus(),
                    "organizer"
            );
        }
    }

    private void requireApprovedStatus(
            String verificationStatus,
            String accountType) {

        String normalizedStatus =
                verificationStatus == null
                        ? ""
                        : verificationStatus
                                .trim()
                                .toUpperCase(Locale.ROOT);

        switch (normalizedStatus) {

            case "APPROVED" -> {
                /*
                 * Verified. Login is permitted.
                 */
            }

            case "REJECTED" ->
                    throw new AccountNotVerifiedException(
                            "Your " + accountType +
                            " account verification was rejected. " +
                            "Please contact support for assistance."
                    );

            default ->
                    throw new AccountNotVerifiedException(
                            buildPendingMessage(accountType)
                    );
        }
    }

    private String buildPendingMessage(
            String accountType) {

        return "Your " + accountType +
               " account is pending verification. " +
               "You will be able to log in once verification " +
               "is completed.";
    }

    /*
     * =========================================================
     * AUTHENTICATED USER
     * =========================================================
     */

    private UserPrinciple
            getAuthenticatedUserPrinciple() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        if (
            authentication == null ||
            !authentication.isAuthenticated()
        ) {
            throw new IllegalStateException(
                    "Authenticated user is required."
            );
        }

        Object principal =
                authentication.getPrincipal();

        if (!(principal instanceof UserPrinciple)) {
            throw new IllegalStateException(
                    "Invalid authenticated user principal."
            );
        }

        return (UserPrinciple) principal;
    }

    /*
     * =========================================================
     * NORMALIZATION HELPERS
     * =========================================================
     */

    private String normalizeEmail(
            String email) {

        if (
            email == null ||
            email.isBlank()
        ) {
            throw new InvalidEmailException(
                    "Email is required."
            );
        }

        return email
                .trim()
                .toLowerCase(
                        Locale.ROOT
                );
    }

    private String normalizeMobileNumber(
            String mobileNumber) {

        if (
            mobileNumber == null ||
            mobileNumber.isBlank()
        ) {
            throw new InvalidMobileNumberException(
                    "Mobile number is required."
            );
        }

        return mobileNumber.trim();
    }

    private boolean isValidEmail(
            String email) {

        if (
            email == null ||
            email.isBlank()
        ) {
            return false;
        }

        String regex =
                "^[A-Za-z0-9+_.-]+@" +
                "[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";

        return email.matches(regex);
    }
}