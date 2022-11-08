package com.example.group4project2.globaluserbankmanagement.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer_master")
public class Customer_Master {

	@Id
	String customer_number;

	String firstname;
	String middlename;
	String lastname;
	String customer_city;
	String customer_contact_no;
	String occupation;
	Date customer_date_of_birth;
	private  static long x=22000;
	String password;

    
    public Customer_Master() {
        this.x++;
this.customer_number=String.valueOf(x);

    }
	
	
	

	public Customer_Master(String customer_number, String firstname, String middlename, String lastname,
		String customer_city, String customer_contact_no, String occupation, Date customer_date_of_birth,String password) {
	
	super();		
	this.customer_number = customer_number;
	this.firstname = firstname;
	this.middlename = middlename;
	this.lastname = lastname;
	this.customer_city = customer_city;
	this.customer_contact_no = customer_contact_no;
	this.occupation = occupation;
	this.customer_date_of_birth = customer_date_of_birth;
	this.password=password;
	}

	public String getPassword(){
		return this.password;
	}
	public void setPassword(String password){
		this.password=password;
	}


	public String getCustomer_number() {
		return customer_number;
	}


	public void setCustomer_number(long x) {
		this.customer_number = String.valueOf(x);

	}
	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getMiddlename() {
		return middlename;
	}


	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getCustomer_city() {
		return customer_city;
	}


	public void setCustomer_city(String customer_city) {
		this.customer_city = customer_city;
	}


	public String getCustomer_contact_no() {
		return customer_contact_no;
	}


	public void setCustomer_contact_no(String customer_contact_no) {
		this.customer_contact_no = customer_contact_no;
	}


	public String getOccupation() {
		return occupation;
	}


	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}


	public Date getCustomer_date_of_birth() {
		return customer_date_of_birth;
	}


	public void setCustomer_date_of_birth(Date customer_date_of_birth) {
		this.customer_date_of_birth = customer_date_of_birth;
	}
	
	
	
	
	
}
