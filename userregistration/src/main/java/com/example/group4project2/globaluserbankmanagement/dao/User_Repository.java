package com.example.group4project2.globaluserbankmanagement.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.group4project2.globaluserbankmanagement.model.User_Details;

@Repository
public interface User_Repository extends JpaRepository<User_Details,String> {

    
    
}
