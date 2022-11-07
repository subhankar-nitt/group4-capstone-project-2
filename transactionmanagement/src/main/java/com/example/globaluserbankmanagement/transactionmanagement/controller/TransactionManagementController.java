package com.example.globaluserbankmanagement.transactionmanagement.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.globaluserbankmanagement.transactionmanagement.model.Transaction_Details;
import com.example.globaluserbankmanagement.transactionmanagement.service.Transaction_DetailsService;

@RestController
public class TransactionManagementController {
	
	@Autowired
	Transaction_DetailsService service;
	
	//arguments retrieved using PathVariable
	@GetMapping("/getTransactions/{account_number}/{transaction_type}/{start_date}/{end_date}")
	public ResponseEntity<List<Transaction_Details>> showTransactions(
			@PathVariable("account_number") String account_number, 
			@PathVariable("transaction_type") String transaction_type,
			@PathVariable("start_date") Date start_date, 
			@PathVariable("end_date") Date end_date) {
		return new ResponseEntity<List<Transaction_Details>>(service.showTransaction(account_number, transaction_type, start_date, end_date),HttpStatus.ACCEPTED);
		
	}
	

}
