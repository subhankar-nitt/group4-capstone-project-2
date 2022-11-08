package com.example.globaluserbankmanagement.loanapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addLoan")
	public ResponseEntity<Loan_Details> addLoan(
			@RequestBody Loan_Details loan_details) throws Exception
	{
		if(service.checkIfUserCanApply(loan_details.getCustomer_number()))
			throw new Exception("User is not a valid Account Holder");
		
		return new ResponseEntity<Loan_Details>(service.addLoan(loan_details),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/showAllLoans")
	public ResponseEntity<List<Loan_Details>> showAllLoans(
			@PathVariable("customer_number") String customer_number)
	{
		return new ResponseEntity<List<Loan_Details>>(service.showAllLoans(customer_number),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/checkIfUserCanApply/{customer_number}")
	public ResponseEntity<Boolean> checkIfUserCanApply(
			@PathVariable("customer_number") String customer_number)
	{
		return new ResponseEntity<Boolean>(service.checkIfUserCanApply(customer_number),HttpStatus.ACCEPTED);
	}
}
