package com.example.server.dto;

import jakarta.validation.constraints.NotBlank;

public class SubscriptionRequest {

    @NotBlank
    private String planCode;

    private String paymentReference;

    public String getPlanCode() {
        return planCode;
    }

    public void setPlanCode(String planCode) {
        this.planCode = planCode;
    }

    public String getPaymentReference() {
        return paymentReference;
    }

    public void setPaymentReference(String paymentReference) {
        this.paymentReference = paymentReference;
    }
}
