package com.example.globaluserbankmanagement.loanapplication.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.globaluserbankmanagement.loanapplication.model.CompositeKey;
import com.example.globaluserbankmanagement.loanapplication.model.Loan_Details;

@Repository
public interface Loan_DetailsDao extends JpaRepository<Loan_Details,CompositeKey>{
	
	@Query("select l from Loan_Details l where l.customer_number =: customer_number")
	public List<Loan_Details> getAllLoans(@Param("customer_number") String customer_number);
	

}
