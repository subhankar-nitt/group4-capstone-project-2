package com.example.globaluserbankmanagement.loanapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globaluserbankmanagement.loanapplication.dao.Loan_DetailsDao;
import com.example.globaluserbankmanagement.loanapplication.model.Account_Master;
import com.example.globaluserbankmanagement.loanapplication.model.Loan_Details;

@Service
public class Loan_DetailsServiceImpl implements Loan_DetailsService{

	@Autowired
	Loan_DetailsDao dao;
	
	@Override
	public Loan_Details addLoan(Loan_Details loan_details) {
		// TODO Auto-generated method stub
		return dao.save(loan_details);
	}



	@Override
	public boolean checkIfUserCanApply(String customer_number) {
		// TODO Auto-generated method stub
		List<Account_Master> account_masters = dao.checkIfUserCanApply(customer_number);
		if(account_masters.isEmpty()) 
			return false;
		return true;
	}



	@Override
	public List<Loan_Details> showAllLoans(String customer_number) {
		// TODO Auto-generated method stub
		return dao.getAllLoans(customer_number);
		
	}

}
