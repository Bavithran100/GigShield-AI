package com.example.server.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UserProfileRequest {

    @NotBlank
    private String name;

    @NotBlank
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    private String phoneNumber;

    @NotBlank
    private String city;

    @NotBlank
    private String deliveryPlatform;

    @NotBlank
    private String vehicleType;

    @NotBlank
    @Size(min = 4, max = 4, message = "Aadhaar last 4 must be exactly 4 digits")
    @Pattern(regexp = "^[0-9]{4}$", message = "Aadhaar last 4 must be numeric")
    private String aadhaarLast4;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDeliveryPlatform() {
        return deliveryPlatform;
    }

    public void setDeliveryPlatform(String deliveryPlatform) {
        this.deliveryPlatform = deliveryPlatform;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getAadhaarLast4() {
        return aadhaarLast4;
    }

    public void setAadhaarLast4(String aadhaarLast4) {
        this.aadhaarLast4 = aadhaarLast4;
    }
}
