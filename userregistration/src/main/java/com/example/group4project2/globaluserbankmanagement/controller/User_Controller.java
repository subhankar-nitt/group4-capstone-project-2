package com.example.group4project2.globaluserbankmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.group4project2.globaluserbankmanagement.model.User_Details;
import com.example.group4project2.globaluserbankmanagement.service.User_Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
public class User_Controller {
    @Autowired
    User_Service user_Service;

    @GetMapping(value="/user/{id}")
    public Optional<User_Details> getMethodName(@PathVariable("id") String id) {
        return user_Service.getUser(id);
    }
    
}
