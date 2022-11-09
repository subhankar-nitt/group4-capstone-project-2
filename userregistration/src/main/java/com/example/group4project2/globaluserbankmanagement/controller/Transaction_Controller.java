package com.example.group4project2.globaluserbankmanagement.controller;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.group4project2.globaluserbankmanagement.model.Transaction_Details;
import com.example.group4project2.globaluserbankmanagement.service.Transaction_Service;

@RestController
public class Transaction_Controller {
    
    @Autowired
    Transaction_Service transaction_Service;

    @CrossOrigin(origins = "http://localhost:3000")  
    @PostMapping("/addTransaction")
    public int addTransaction(@RequestBody Transaction_Details transaction_Details) throws Exception{
        
        Optional<Transaction_Details> temp = transaction_Service.getTransaction(transaction_Details.getTransaction_number());
        if(temp.isPresent()){
            int amt =temp.get().getTransaction_amount();
            System.out.println(temp.get().getTransaction_type());

            if(temp.get().getTransaction_type().equals("withdraw")){
                amt -= transaction_Details.getTransaction_amount();
                if(amt<0){
                    throw new Exception("insufficient balance");
                }
            }
            else{
                amt += transaction_Details.getTransaction_amount();
            }
            transaction_Details.setTransaction_amount(amt);
            
        }
        transaction_Service.saveTransaction(transaction_Details);
        return transaction_Service.getTransaction(transaction_Details.getTransaction_number()).get().getTransaction_amount();
        //return transaction_Service.sendTransactionService(transaction_Details.getTransaction_number());
    }
}

