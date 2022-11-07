package com.example.group4project2.globaluserbankmanagement.service;

import java.util.List;

import com.example.group4project2.globaluserbankmanagement.model.Customer_Master;

public interface Customer_MasterService {
	
	public Customer_Master insertUser(Customer_Master customer_master);
	public List<Customer_Master> showAllData();
	

}
