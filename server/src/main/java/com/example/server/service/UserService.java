package com.example.server.service;

import com.example.server.dto.UserProfileRequest;
import com.example.server.model.UserAccount;
import com.example.server.repository.UserAccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {

    private final UserAccountRepository userAccountRepository;

    public UserService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public UserAccount getByEmail(String email) {
        return userAccountRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    public UserAccount updateProfile(String email, UserProfileRequest request) {
        UserAccount user = getByEmail(email);
        user.setName(request.getName());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setCity(request.getCity());
        user.setDeliveryPlatform(request.getDeliveryPlatform());
        user.setVehicleType(request.getVehicleType());
        user.setAadhaarLast4(request.getAadhaarLast4());
        user.setProfileCompleted(true);
        return userAccountRepository.save(user);
    }
}
