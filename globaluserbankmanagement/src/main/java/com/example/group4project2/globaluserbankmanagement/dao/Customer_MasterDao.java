package com.example.group4project2.globaluserbankmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.group4project2.globaluserbankmanagement.model.Customer_Master;

@Repository
public interface Customer_MasterDao extends JpaRepository<Customer_Master,String>{
	

}
