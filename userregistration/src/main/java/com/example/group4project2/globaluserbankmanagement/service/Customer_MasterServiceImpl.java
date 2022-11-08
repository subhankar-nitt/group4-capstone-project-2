package com.example.group4project2.globaluserbankmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.group4project2.globaluserbankmanagement.dao.Customer_MasterDao;
import com.example.group4project2.globaluserbankmanagement.dao.User_Repository;
import com.example.group4project2.globaluserbankmanagement.model.Customer_Master;
import com.example.group4project2.globaluserbankmanagement.model.User_Details;



@Service
public class Customer_MasterServiceImpl implements Customer_MasterService{
	
	@Autowired
	Customer_MasterDao dao;
	
	@Autowired
	User_Repository user_Repository;
	@Override
	public Customer_Master insertUser(Customer_Master customer_master) {

		User_Details user_Details = new User_Details(customer_master.getCustomer_number(),customer_master.getPassword());
		user_Repository.save(user_Details);

		// TODO Auto-generated method stub
		return dao.save(customer_master);
		
	}

	@Override
	public List<Customer_Master> showAllData() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

}
