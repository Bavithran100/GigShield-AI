package com.example.server.config;

import com.example.server.model.InsurancePlan;
import com.example.server.repository.InsurancePlanRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final InsurancePlanRepository insurancePlanRepository;

    public DataInitializer(InsurancePlanRepository insurancePlanRepository) {
        this.insurancePlanRepository = insurancePlanRepository;
    }

    @Override
    public void run(String... args) {
        if (insurancePlanRepository.count() > 0) {
            return;
        }

        insurancePlanRepository.saveAll(List.of(
                new InsurancePlan("BASIC", "Basic", BigDecimal.valueOf(10), BigDecimal.valueOf(200)),
                new InsurancePlan("STANDARD", "Standard", BigDecimal.valueOf(20), BigDecimal.valueOf(400)),
                new InsurancePlan("PREMIUM", "Premium", BigDecimal.valueOf(30), BigDecimal.valueOf(600))
        ));
    }
}
