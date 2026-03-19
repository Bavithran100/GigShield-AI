package com.example.server.service;

import com.example.server.model.InsurancePlan;
import com.example.server.repository.InsurancePlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {

    private final InsurancePlanRepository insurancePlanRepository;

    public PlanService(InsurancePlanRepository insurancePlanRepository) {
        this.insurancePlanRepository = insurancePlanRepository;
    }

    public List<InsurancePlan> getAllPlans() {
        return insurancePlanRepository.findAll();
    }
}
