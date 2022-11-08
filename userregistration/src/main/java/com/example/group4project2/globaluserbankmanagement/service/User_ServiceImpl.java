package com.example.group4project2.globaluserbankmanagement.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.group4project2.globaluserbankmanagement.dao.User_Repository;
import com.example.group4project2.globaluserbankmanagement.model.User_Details;

@Service
public class User_ServiceImpl implements User_Service {

    @Autowired
    User_Repository user_Repository;

    @Override
    public Optional<User_Details> getUserByIdPassword(String id,String password){
        
        return user_Repository.findByIdPassword(id,password);
    }
    
}
