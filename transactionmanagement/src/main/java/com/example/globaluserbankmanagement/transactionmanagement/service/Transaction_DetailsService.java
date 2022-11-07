package com.example.globaluserbankmanagement.transactionmanagement.service;

import java.sql.Date;
import java.util.List;

import com.example.globaluserbankmanagement.transactionmanagement.model.Transaction_Details;

public interface Transaction_DetailsService {
	
	public List<Transaction_Details> showTransaction(String account_number,
													 String transaction_type,
													 Date start_date,
													 Date end_date);

}
