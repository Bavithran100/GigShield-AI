package com.example.server.controller;

import com.example.server.dto.SubscriptionRequest;
import com.example.server.model.Subscription;
import com.example.server.service.SubscriptionService;
import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subscription")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @GetMapping("/me")
    public Subscription getMySubscription(@AuthenticationPrincipal OAuth2User principal) {
        return subscriptionService.getActiveSubscription(principal.getAttribute("email"));
    }

    @PostMapping
    public Subscription subscribe(
            @AuthenticationPrincipal OAuth2User principal,
            @Valid @RequestBody SubscriptionRequest request
    ) {
        return subscriptionService.createSubscription(principal.getAttribute("email"), request);
    }
}
