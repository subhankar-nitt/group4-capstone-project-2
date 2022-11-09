package com.example.globaluserbankmanagement.loanapplication.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.globaluserbankmanagement.loanapplication.model.Account_Master;

@Repository
public interface Accont_MasterController extends JpaRepository<Account_Master,String> {

    @Query("select t from Account_Master t where t.account_number = :account_number and t.branch_id= :branch_id")
     Optional<Account_Master> findById(@Param("account_number") String account_number,@Param("branch_id") String branch_id);
    
}
