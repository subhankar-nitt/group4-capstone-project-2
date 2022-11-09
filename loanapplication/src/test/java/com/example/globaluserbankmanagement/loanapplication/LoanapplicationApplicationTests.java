package com.example.globaluserbankmanagement.loanapplication;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.globaluserbankmanagement.loanapplication.controller.Loan_DetailsController;
import com.example.globaluserbankmanagement.loanapplication.model.Loan_Details;

class LoanApplication {
	
	Loan_DetailsController controller = new Loan_DetailsController();

	@Test
	void addLoanSucccessful() throws Exception {
		Loan_Details loan = new Loan_Details("1","13",500);
		ResponseEntity<Loan_Details> actual = controller.addLoan(loan);
		ResponseEntity<Loan_Details> expected = 
				new ResponseEntity<Loan_Details>(loan, HttpStatus.ACCEPTED);
				
		assertEquals(expected, actual);
		
		
	}
	
	
	@Test
	void addLoanUnsuccessfulInvalidBranch_Id() throws Exception {
		Loan_Details loan = new Loan_Details("1","123",500);
		ResponseEntity<Loan_Details> actual = controller.addLoan(loan);
		Exception expected = new Exception("User is not a valid Account Holder");
				new ResponseEntity<Loan_Details>(loan, HttpStatus.ACCEPTED);
				
		assertEquals(expected, actual);

		
	}
	
	@Test
	void addLoanUnsuccessfulInvalidCustomer_Number() throws Exception {
		Loan_Details loan = new Loan_Details("123","13",500);
		ResponseEntity<Loan_Details> actual = controller.addLoan(loan);
		Exception expected = new Exception("User is not a valid Account Holder");
				new ResponseEntity<Loan_Details>(loan, HttpStatus.ACCEPTED);
				
		assertEquals(expected, actual);
	}
}

