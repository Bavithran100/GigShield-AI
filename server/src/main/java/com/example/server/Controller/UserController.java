package com.example.server.controller;

import com.example.server.dto.UserProfileRequest;
import com.example.server.model.UserAccount;
import com.example.server.service.UserService;
import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public UserAccount getCurrentUser(@AuthenticationPrincipal OAuth2User principal) {
        return userService.getByEmail(principal.getAttribute("email"));
    }

    @PostMapping("/profile")
    public UserAccount updateProfile(
            @AuthenticationPrincipal OAuth2User principal,
            @Valid @RequestBody UserProfileRequest request
    ) {
        return userService.updateProfile(principal.getAttribute("email"), request);
    }
}
