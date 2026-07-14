package com.coderivix.backend.controller;

import com.coderivix.backend.dto.ProfileResponse;
import com.coderivix.backend.dto.UpdateProfileRequest;
import com.coderivix.backend.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/profile")
    public ProfileResponse getProfile(Authentication authentication) {

        String email = authentication.getName();

        return userService.getProfile(email);
    }

    @PutMapping("/profile")
    public String updateProfile(
            Authentication authentication,
            @RequestBody UpdateProfileRequest request) {

        String email = authentication.getName();

        return userService.updateProfile(email, request);
    }
}