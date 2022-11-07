package com.example.globaluserbankmanagement.loanapplication.model;

import java.io.Serializable;

public class CompositeKey implements Serializable{
	
	String customer_number;
	String branch_id;
	
	public CompositeKey() {
		
	}
	
	
	public CompositeKey(String customer_number, String branch_id) {
		super();
		this.customer_number = customer_number;
		this.branch_id = branch_id;
	}


	public String getCustomer_number() {
		return customer_number;
	}


	public void setCustomer_number(String customer_number) {
		this.customer_number = customer_number;
	}


	public String getBranch_id() {
		return branch_id;
	}


	public void setBranch_id(String branch_id) {
		this.branch_id = branch_id;
	}
	
	
	
	

}
