package com.example.globaluserbankmanagement.loanapplication.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "account_master")
public class Account_Master {
	
	@Id
	String account_number;
	int opening_balance;
	Date account_opening_date;
	String account_type;
	String account_status;
	String customer_number;
	String branch_id;
//	
//	@ManyToOne
//	@JoinColumn(name = "customer_number")
//	Customer_Master customer_master;
//	
//	@ManyToOne
//	@JoinColumn(name = "branch_id")
//	Branch_Master branch_master;
//	
	public Account_Master() {
		
	}

	public Account_Master(String account_number, int opening_balance,
			Date account_opening_date, String account_type, String account_status,
			String customer_number, String branch_id) {
		super();
		this.account_number = account_number;
		this.opening_balance = opening_balance;
		this.account_opening_date = account_opening_date;
		this.account_type = account_type;
		this.account_status = account_status;
		this.customer_number = customer_number;
		this.branch_id = branch_id;
		
	}
	public String getBranchId() {
		return this.branch_id;
	};
	public void setBranchId(String id){
		this.branch_id=id;
	}


	public String getAccount_number() {
		return account_number;
	}

	public void setAccount_number(String account_number) {
		this.account_number = account_number;
	}

	public int getOpening_balance() {
		return opening_balance;
	}

	public void setOpening_balance(int opening_balance) {
		this.opening_balance = opening_balance;
	}

	public Date getAccount_opening_date() {
		return account_opening_date;
	}

	public void setAccount_opening_date(Date account_opening_date) {
		this.account_opening_date = account_opening_date;
	}

	public String getAccount_type() {
		return account_type;
	}

	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}

	public String getAccount_status() {
		return account_status;
	}

	public void setAccount_status(String account_status) {
		this.account_status = account_status;
	}
	
	
}

