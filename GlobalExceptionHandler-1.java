package com.esports.user_service.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.esports.user_service.DTO.ExceptionDTO;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public ResponseEntity<ExceptionDTO> handleResourceAlreadyExistsException( ResourceAlreadyExistsException exception,HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.CONFLICT.value(),
                HttpStatus.CONFLICT.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(dto);
    }

    @ExceptionHandler(InvalidEmailException.class)
    public ResponseEntity<ExceptionDTO> handleInvalidEmailException(
            InvalidEmailException exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(dto);
    }

    @ExceptionHandler(InvalidPasswordException.class)
    public ResponseEntity<ExceptionDTO> handleInvalidPasswordException(
            InvalidPasswordException exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.UNAUTHORIZED.value(),
                HttpStatus.UNAUTHORIZED.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(dto);
    }
    
    @ExceptionHandler(InvalidMobileNumberException.class)
    public ResponseEntity<ExceptionDTO> handleInvalidMobileNumberException(
            InvalidMobileNumberException exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.UNAUTHORIZED.value(),
                HttpStatus.UNAUTHORIZED.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(dto);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionDTO> handleGlobalException(
            Exception exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(dto);
    }

  
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ExceptionDTO> handleResourceNotFoundException(
            ResourceNotFoundException exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.NOT_FOUND.value(),
                HttpStatus.NOT_FOUND.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(dto);
    }
    
    @ExceptionHandler(BusinessValidationException.class)
    public ResponseEntity<ExceptionDTO> handleBusinessValidationException(
            BusinessValidationException exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(dto);
    }
    
    
    @ExceptionHandler(BrandVerificationException.class)
    public ResponseEntity<ExceptionDTO> handleBrandVerificationException(BrandVerificationException exception, HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(dto);
    }
    
    
    @ExceptionHandler(BrandValidationException.class)
    public ResponseEntity<ExceptionDTO> handleBrandValidationException(BrandValidationException exception, HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(dto);
    }

    @ExceptionHandler(AccountNotVerifiedException.class)
    public ResponseEntity<ExceptionDTO> handleAccountNotVerifiedException(
            AccountNotVerifiedException exception,
            HttpServletRequest request) {

        ExceptionDTO dto = new ExceptionDTO(
                HttpStatus.FORBIDDEN.value(),
                HttpStatus.FORBIDDEN.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(dto);
    }

}
