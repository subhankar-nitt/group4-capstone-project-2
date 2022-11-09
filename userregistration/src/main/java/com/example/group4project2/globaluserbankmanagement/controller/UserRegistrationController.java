package com.example.group4project2.globaluserbankmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.group4project2.globaluserbankmanagement.model.Customer_Master;
import com.example.group4project2.globaluserbankmanagement.service.Customer_MasterService;

@RestController
public class UserRegistrationController {
	
	@Autowired
	Customer_MasterService service;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/registerUser")
	public ResponseEntity<Customer_Master> registerUser(@RequestBody Customer_Master customer_master)
	{
		
		return new ResponseEntity<Customer_Master>(service.insertUser(customer_master),HttpStatus.ACCEPTED);
	}

	

}
