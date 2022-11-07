package com.example.globaluserbankmanagement.transactionmanagement.dao;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.globaluserbankmanagement.transactionmanagement.model.Transaction_Details;

@Repository
public interface Transaction_DetailsDao extends JpaRepository<Transaction_Details,String>{
	
	//important note for Hibernate:
	//in the query the table name is not 'transaction_details" but "Transaction_Details" which is the
	//name of the model class for transaction_details table
	
	@Query("select t from Transaction_Details t "
			+ "where t.account_number = :account_number and "
			+ "t.transaction_type = :transaction_type and "
			+ "t.date_of_transaction >= :start_date and "
			+ "t.date_of_transaction <= :end_date ")
	public List<Transaction_Details> getTransactions(@Param("account_number") String account_number,
											  @Param("transaction_type") String transaction_type,
											  @Param("start_date") Date start_date,
											  @Param("end_date") Date end_date);

}
