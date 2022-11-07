package com.example.globaluserbankmanagement.transactionmanagement.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.globaluserbankmanagement.transactionmanagement.dao.Transaction_DetailsDao;
import com.example.globaluserbankmanagement.transactionmanagement.model.Transaction_Details;

@Service
public class Transaction_DetailsServiceImpl implements Transaction_DetailsService{
	
	@Autowired
	Transaction_DetailsDao dao;

	@Override
	public List<Transaction_Details> showTransaction(String account_number, 
													 String transaction_type,
													 Date start_date, 
													 Date end_date) {
		// TODO Auto
		return dao.getTransactions(account_number, transaction_type, start_date, end_date);
		
	}

}
