package com.example.globaluserbankmanagement.loanapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globaluserbankmanagement.loanapplication.dao.Accont_MasterController;

import com.example.globaluserbankmanagement.loanapplication.dao.Loan_DetailsDao;
import com.example.globaluserbankmanagement.loanapplication.model.Account_Master;
import com.example.globaluserbankmanagement.loanapplication.model.Loan_Details;

@Service
public class Loan_DetailsServiceImpl implements Loan_DetailsService{

	@Autowired
	Loan_DetailsDao dao;

	@Autowired
	Accont_MasterController  controller;

	@Override
	public Loan_Details addLoan(Loan_Details loan_details) {
		// TODO Auto-generated method stub
		return dao.save(loan_details);}
	
	@Override
	public boolean checkIfUserCanApply(String customer_number,String branch_id) {
		// TODO Auto-generated method stub
		//Account_Master account_masters = dao.checkIfUserCanApply(customer_number);

		
		if(controller.findById(customer_number,branch_id).get().getBranchId()==branch_id) 
			return false;

		
		return true;
	}



	@Override
	public List<Loan_Details> showAllLoans(String customer_number) {
		// TODO Auto-generated method stub
		return dao.getAllLoans(customer_number);
		
	}

}
