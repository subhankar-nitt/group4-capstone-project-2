package com.example.globaluserbankmanagement.transactionmanagement.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.globaluserbankmanagement.transactionmanagement.model.Show_Transaction;
import com.example.globaluserbankmanagement.transactionmanagement.model.Transaction_Details;
import com.example.globaluserbankmanagement.transactionmanagement.service.Transaction_DetailsService;

@RestController
public class TransactionManagementController {
	
	@Autowired
	Transaction_DetailsService service;
	
	//arguments retrieved using PathVariable
	@GetMapping("/getTransactions/")
	public ResponseEntity<List<Transaction_Details>> showTransactions(@RequestBody Show_Transaction show_Transaction)throws Exception {


		Date start_date= Date.valueOf(show_Transaction.getStart_date());
		Date end_date=Date.valueOf(show_Transaction.getEnd_date());
		System.out.println("here");
		long millis= System.currentTimeMillis();
		Date currentDate = new Date(millis);
		if(end_date.compareTo(currentDate) >0){
			
			throw new Exception("end date is ahead of current date");
		}
		return new ResponseEntity<List<Transaction_Details>>(service.showTransaction(show_Transaction.getAccount_number(),show_Transaction.getTransaction_type(), start_date, end_date),HttpStatus.ACCEPTED);
		
	}
	

}
