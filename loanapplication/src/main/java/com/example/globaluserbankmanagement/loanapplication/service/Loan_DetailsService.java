package com.example.globaluserbankmanagement.loanapplication.service;

import java.util.List;

import com.example.globaluserbankmanagement.loanapplication.model.Loan_Details;

public interface Loan_DetailsService {
		
	public Loan_Details addLoan(Loan_Details loan_details);
	public List<Loan_Details> getAllLoans(String customer_number);

}
