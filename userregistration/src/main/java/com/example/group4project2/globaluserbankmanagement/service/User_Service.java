package com.example.group4project2.globaluserbankmanagement.service;

import java.util.Optional;

import com.example.group4project2.globaluserbankmanagement.model.User_Details;

public interface User_Service {
    public Optional<User_Details> getUserByIdPassword(String id, String password);
    
}
