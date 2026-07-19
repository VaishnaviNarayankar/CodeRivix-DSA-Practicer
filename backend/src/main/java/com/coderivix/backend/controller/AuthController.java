package com.coderivix.backend.controller;

import com.coderivix.backend.dto.AuthResponse;
import com.coderivix.backend.dto.LoginRequest;
import com.coderivix.backend.dto.RegisterRequest;
import com.coderivix.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return userService.register(request);
    }

    @PostMapping("/signin")
public AuthResponse login(@RequestBody LoginRequest request) {

    System.out.println("LOGIN API CALLED");

    try {
        return userService.login(request);
    } catch (Exception e) {

        System.out.println("CONTROLLER CAUGHT EXCEPTION");
        e.printStackTrace();

        return new AuthResponse(
    null,
    null,
    null,
    e.getMessage()
);
    }
}
}