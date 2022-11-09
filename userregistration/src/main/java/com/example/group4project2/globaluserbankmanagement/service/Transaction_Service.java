package com.example.group4project2.globaluserbankmanagement.service;

import java.util.Optional;

import com.example.group4project2.globaluserbankmanagement.model.Transaction_Details;

public interface Transaction_Service {
    
   // public int sendTransactionService(String transaction_number);
    public void saveTransaction(Transaction_Details transaction_Details);
    public Optional<Transaction_Details> getTransaction(String transaction_number);
}
