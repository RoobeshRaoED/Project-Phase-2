package com.esports.user_service.service;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.esports.user_service.entity.Permission;
import com.esports.user_service.entity.Role;
import com.esports.user_service.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secretKey;

    /*
     * Token type marker written into the "token_type" claim.
     *
     * REGISTRATION tokens are handed out by /auth/users/register so a
     * brand or organizer can finish the signup wizard. They are NOT a
     * login session: JwtFilter only lets them reach the profile
     * creation endpoints, and they expire quickly.
     */
    public static final String TOKEN_TYPE_REGISTRATION = "REGISTRATION";

    /*
     * A full login session, issued only by UserService.login() after
     * the verification gate has passed.
     */
    private static final long SESSION_TOKEN_VALIDITY_MS =
            1000L * 60 * 60 * 24 * 5;

    /*
     * Short window to finish the signup wizard, including file
     * uploads. Deliberately short so a registration token cannot be
     * parked and reused as a substitute for logging in.
     */
    private static final long REGISTRATION_TOKEN_VALIDITY_MS =
            1000L * 60 * 30;

    public String generateToken(User user){
        return buildUserToken(
                user,
                SESSION_TOKEN_VALIDITY_MS,
                null);
    }

    /*
     * Issued at registration time. Carries the same identity claims as
     * a session token but is marked REGISTRATION and expires in 30
     * minutes, so an unverified brand or organizer cannot use it to
     * browse the application in place of a login.
     */
    public String generateRegistrationToken(User user){
        return buildUserToken(
                user,
                REGISTRATION_TOKEN_VALIDITY_MS,
                TOKEN_TYPE_REGISTRATION);
    }

    private String buildUserToken(
            User user,
            long validityMillis,
            String tokenType){

        Map<String,Object> claims = new HashMap<>();

        Set<String> roles = new HashSet<>();
        Set<String> permissions = new HashSet<>();
        for(Role role : user.getRoles()){
            roles.add(role.getRoleName());

            for(Permission permission : role.getPermissions()){
                permissions.add(permission.getPermissionName());
            }
        }

        claims.put("roles",roles);
        claims.put("permissions", permissions);
        claims.put("user_id", user.getId());

        if(tokenType != null){
            claims.put("token_type", tokenType);
        }

        return Jwts
                .builder()
                .claims()
                .add(claims)
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + validityMillis))
                .and()
                .signWith(getKey())
                .compact();
    }
    public String generateToken(String subject){
        Map<String,Object> claims = new HashMap<>();
        claims.put("token_type","SERVICE");

        return Jwts
                .builder()
                .claims()
                .add(claims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 5))
                .and()
                .signWith(getKey())
                .compact();
    }

    private SecretKey getKey(){
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getUserName(String token){
        return extractClaims(token,Claims::getSubject);
    }

    /*
     * Returns the "token_type" claim, or null for a plain session
     * token which does not carry one.
     */
    public String getTokenType(String token){
        return extractClaims(
                token,
                claims -> claims.get("token_type", String.class));
    }

    public boolean isRegistrationToken(String token){
        return TOKEN_TYPE_REGISTRATION
                .equalsIgnoreCase(getTokenType(token));
    }

    public boolean validateToken(String token,UserDetails user){
        final String username = getUserName(token);
        return (username.equals(user.getUsername()) && !isTokenExpiration(token));
    }

    private <T> T extractClaims(String token,Function<Claims,T> claimresolver){
        final Claims claims = extractAllClaims(token);
        return claimresolver.apply(claims);
    }

    private boolean isTokenExpiration(String token){
        return extractExpiration(token).before(new Date()); 
    }

    private Date extractExpiration(String token){
        return extractClaims(token,Claims::getExpiration);
    }


    private Claims extractAllClaims(String token){
        return Jwts.parser()
            .verifyWith(getKey())
            .build()
            .parseSignedClaims(token).getPayload();
    }
}
