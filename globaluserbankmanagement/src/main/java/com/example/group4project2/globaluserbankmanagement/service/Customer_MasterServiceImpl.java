package com.example.group4project2.globaluserbankmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.group4project2.globaluserbankmanagement.dao.Customer_MasterDao;
import com.example.group4project2.globaluserbankmanagement.model.Customer_Master;



@Service
public class Customer_MasterServiceImpl implements Customer_MasterService{
	
	@Autowired
	Customer_MasterDao dao;
	
	@Override
	public Customer_Master insertUser(Customer_Master customer_master) {
		// TODO Auto-generated method stub
		return dao.save(customer_master);
		
	}

	@Override
	public List<Customer_Master> showAllData() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

}
