package com.example.group4project2.globaluserbankmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.group4project2.globaluserbankmanagement.model.Transaction_Details;

@Repository
public interface Transaction_Repository extends JpaRepository<Transaction_Details,String> {

    // @Query("select t.amount from Transaction_Details t where t.transaction_number = :transaction_number")
    // int getAmountByTransNumber(@Param("transaction_number") String transaction_number);
    
}
