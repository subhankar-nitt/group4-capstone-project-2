package com.example.group4project2.globaluserbankmanagement.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.group4project2.globaluserbankmanagement.model.User_Details;

@Repository
public interface User_Repository extends JpaRepository<User_Details,String> {

    @Query("select t from User_Details t where t.customer_id = :id and t.password = :password")
    Optional<User_Details> findByIdPassword(@Param("id") String id, @Param("password") String password);

    
    
}
