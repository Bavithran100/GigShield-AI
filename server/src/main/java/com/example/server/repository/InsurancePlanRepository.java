package com.example.server.repository;

import com.example.server.model.InsurancePlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InsurancePlanRepository extends JpaRepository<InsurancePlan, Long> {
    Optional<InsurancePlan> findByCode(String code);
}
