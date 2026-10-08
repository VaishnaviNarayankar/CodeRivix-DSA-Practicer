package com.coderivix.backend.service;

import com.coderivix.backend.dto.AuthResponse;
import com.coderivix.backend.dto.LoginRequest;
import com.coderivix.backend.dto.RegisterRequest;
import com.coderivix.backend.entity.User;
import com.coderivix.backend.repository.UserRepository;
import com.coderivix.backend.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.coderivix.backend.dto.ProfileResponse;
import com.coderivix.backend.dto.UpdateProfileRequest;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public AuthResponse login(LoginRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElse(null);

    if (user == null) {
    return new AuthResponse(null, null, null, "User not found");
}

if (!passwordEncoder.matches(
        request.getPassword(),
        user.getPassword())) {

    return new AuthResponse(null, null, null, "Invalid password");
}

String token = jwtService.generateToken(user.getEmail());

return new AuthResponse(
        token,
        user.getName(),
        user.getEmail(),
        "Login successful"
);
}

public ProfileResponse getProfile(String email) {

    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found"));

    return new ProfileResponse(
            user.getName(),
            user.getEmail()
    );
}

public String updateProfile(String email, UpdateProfileRequest request) {

    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found"));

    user.setName(request.getName());

    if (request.getPassword() != null &&
            !request.getPassword().trim().isEmpty()) {

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );
    }

    userRepository.save(user);

    return "Profile updated successfully";
}

}