package com.example.globaluserbankmanagement.loanapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.globaluserbankmanagement.loanapplication.model.Loan_Details;
import com.example.globaluserbankmanagement.loanapplication.service.Loan_DetailsService;

@RestController
public class Loan_DetailsController {
	
	@Autowired
	Loan_DetailsService service;
	
	@PostMapping("/addLoan")
	public ResponseEntity<Loan_Details> addLoan(@RequestBody Loan_Details loan_details)
	{
		return new ResponseEntity<Loan_Details>(service.addLoan(loan_details),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("getAllLoans/{customer_number}")
	public ResponseEntity<List<Loan_Details>> getAllLoans(
			@PathVariable("customer_number") String customer_number)
	{
		return new ResponseEntity<List<Loan_Details>>(service.getAllLoans(customer_number),HttpStatus.ACCEPTED);
	}

}
