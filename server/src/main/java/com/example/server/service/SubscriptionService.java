package com.example.server.service;

import com.example.server.dto.SubscriptionRequest;
import com.example.server.model.InsurancePlan;
import com.example.server.model.Subscription;
import com.example.server.model.UserAccount;
import com.example.server.model.enums.SubscriptionStatus;
import com.example.server.repository.InsurancePlanRepository;
import com.example.server.repository.SubscriptionRepository;
import com.example.server.repository.UserAccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;

@Service
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;
    private final InsurancePlanRepository insurancePlanRepository;
    private final UserAccountRepository userAccountRepository;

    public SubscriptionService(
            SubscriptionRepository subscriptionRepository,
            InsurancePlanRepository insurancePlanRepository,
            UserAccountRepository userAccountRepository
    ) {
        this.subscriptionRepository = subscriptionRepository;
        this.insurancePlanRepository = insurancePlanRepository;
        this.userAccountRepository = userAccountRepository;
    }

    public Subscription getActiveSubscription(String email) {
        return subscriptionRepository.findFirstByUserEmailAndStatusOrderByStartDateDesc(email, SubscriptionStatus.ACTIVE)
                .orElse(null);
    }

    public Subscription createSubscription(String email, SubscriptionRequest request) {
        UserAccount user = userAccountRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        InsurancePlan plan = insurancePlanRepository.findByCode(request.getPlanCode().toUpperCase())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Plan not found"));

        Subscription existing = getActiveSubscription(email);
        if (existing != null) {
            existing.setStatus(SubscriptionStatus.EXPIRED);
            subscriptionRepository.save(existing);
        }

        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setPlan(plan);
        subscription.setPlanType(plan.getName());
        subscription.setWeeklyPrice(plan.getWeeklyPrice());
        subscription.setCoverageAmount(plan.getCoverageAmount());
        subscription.setPaymentReference(
                request.getPaymentReference() != null && !request.getPaymentReference().isBlank()
                        ? request.getPaymentReference()
                        : "mock-payment-" + System.currentTimeMillis()
        );
        subscription.setStartDate(LocalDate.now());
        subscription.setEndDate(LocalDate.now().plusDays(7));
        subscription.setStatus(SubscriptionStatus.ACTIVE);

        return subscriptionRepository.save(subscription);
    }
}
