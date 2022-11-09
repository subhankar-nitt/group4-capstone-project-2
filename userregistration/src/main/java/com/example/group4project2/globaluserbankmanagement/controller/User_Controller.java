package com.example.group4project2.globaluserbankmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.group4project2.globaluserbankmanagement.model.User_Details;
import com.example.group4project2.globaluserbankmanagement.service.User_ServiceImpl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class User_Controller {
    @Autowired
    User_ServiceImpl user_Service;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value="/login")
    public Optional<User_Details> getUserIdPassword( @RequestBody User_Details user_details  ) {
        System.out.println(user_details.toString());
        Optional<User_Details> user= user_Service.getUserByIdPassword(user_details.getCustomer_id(),user_details.getPassword());
        // System.out.println(user.get().toString());
        if(!user.isPresent()){
            throw new NullPointerException("UserName and Password are incorrect ");
        }

        return user;
    }
    
}
