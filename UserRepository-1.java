package com.esports.user_service.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.esports.user_service.entity.User;

public interface UserRepository extends JpaRepository<User,String> {

	    @EntityGraph(attributePaths = {
	        "roles", 
	        "roles.permissions"})
	    Optional<User> findByUsername(String username);
	    

        Optional<User> findByEmail(String email);

        Optional<User> findByMobileNumber(String mobileNumber);

        boolean existsByUsername(String username);

        boolean existsByEmail(String email);

        boolean existsByMobileNumber(String mobileNumber);

        @Query("""
        SELECT DISTINCT user
        FROM User user
        LEFT JOIN FETCH user.roles
        LEFT JOIN FETCH user.userProfile
        LEFT JOIN FETCH user.organizerDetails
        LEFT JOIN FETCH user.brandDetails
        WHERE user.id = :userId
    """)
    Optional<User> findCompleteProfileByUserId(
            @Param("userId")
            String userId
    );    


        @Query("""
        SELECT DISTINCT user
        FROM User user
        LEFT JOIN FETCH user.organizerDetails
        LEFT JOIN FETCH user.brandDetails
        WHERE user.username = :username
    """)
    Optional<User> findVerificationDetailsByUsername(
            @Param("username")
            String username
    );

}
