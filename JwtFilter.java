package com.esports.user_service.config;


import com.esports.user_service.service.JwtService;
import com.esports.user_service.service.MyUserDetailsService;
import com.esports.user_service.service.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    /*
     * The only endpoints a REGISTRATION token may reach.
     *
     * A brand or organizer receives this token from
     * /auth/users/register so they can finish the signup wizard and
     * submit their profile for manager verification. It is not a
     * login session, so it must not open the rest of the application.
     */
    private static final List<String> REGISTRATION_ALLOWED_PATHS =
            List.of(
                    "/auth/users/profile/createProfile",
                    "/auth/BrandDetails/create",
                    "/auth/OrganizerDetails/create/organizerProfile");

    final private JwtService jwtService;
    final private ApplicationContext applicationContext;

    @Autowired
    public JwtFilter(JwtService jwtService, ApplicationContext applicationContext) {
        this.jwtService = jwtService;
        this.applicationContext = applicationContext;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorization = request.getHeader("Authorization");
        String username = null;
        String token = null;

        if (authorization != null && authorization.startsWith("Bearer ")) {
            token = authorization.substring(7);
            username = jwtService.getUserName(token);
        }

        /*
         * CR: Restrict Login for Unverified Accounts.
         *
         * Without this check a brand could register, keep the token
         * returned by /auth/users/register, and use the application
         * normally without ever passing the login verification gate.
         */
        if (token != null
                && jwtService.isRegistrationToken(token)
                && !isRegistrationPathAllowed(request)) {

            writeForbidden(
                    request,
                    response,
                    UserService.VERIFICATION_PENDING_MESSAGE);
            return;
        }

        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = applicationContext.getBean(MyUserDetailsService.class).loadUserByUsername(username);
            if(jwtService.validateToken(token,userDetails)){
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                // authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }

    private boolean isRegistrationPathAllowed(
            HttpServletRequest request) {

        String path = request.getRequestURI();

        if (path == null) {
            return false;
        }

        return REGISTRATION_ALLOWED_PATHS
                .stream()
                .anyMatch(path::equals);
    }

    /*
     * Written by hand because a servlet filter runs before
     * @ControllerAdvice, so GlobalExceptionHandler never sees this.
     * The body shape matches ExceptionDTO so the Angular client can
     * read error.message the same way everywhere.
     */
    private void writeForbidden(
            HttpServletRequest request,
            HttpServletResponse response,
            String message) throws IOException {

        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");

        String body = "{"
                + "\"status\":" + HttpStatus.FORBIDDEN.value() + ","
                + "\"error\":\"" + HttpStatus.FORBIDDEN.getReasonPhrase() + "\","
                + "\"message\":\"" + message + "\","
                + "\"path\":\"" + request.getRequestURI() + "\","
                + "\"timestamp\":\"" + LocalDateTime.now() + "\""
                + "}";

        response.getWriter().write(body);
        response.getWriter().flush();
    }
}
