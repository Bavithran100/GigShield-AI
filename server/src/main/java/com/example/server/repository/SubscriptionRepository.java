package com.example.server.repository;

import com.example.server.model.Subscription;
import com.example.server.model.enums.SubscriptionStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    Optional<Subscription> findFirstByUserEmailAndStatusOrderByStartDateDesc(String email, SubscriptionStatus status);
}
