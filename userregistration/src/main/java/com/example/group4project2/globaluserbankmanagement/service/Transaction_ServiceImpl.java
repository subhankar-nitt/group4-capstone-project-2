package com.example.group4project2.globaluserbankmanagement.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.group4project2.globaluserbankmanagement.dao.Transaction_Repository;
import com.example.group4project2.globaluserbankmanagement.model.Transaction_Details;

@Service
public class Transaction_ServiceImpl  implements Transaction_Service{

    @Autowired
    Transaction_Repository repository;
    // @Override
    // public int sendTransactionService(String transaction_number) {
    //     int amt = repository.getAmountByTransNumber(transaction_number);
    //     return amt;
    // }

    @Override
    public void saveTransaction(Transaction_Details transaction_Details){
        repository.save(transaction_Details);
    }

    @Override
    public Optional<Transaction_Details>  getTransaction(String transaction_number) {
        
        return repository.findById(transaction_number);
    }
    
}
