package com.example.globaluserbankmanagement.transactionmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TransactionmanagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(TransactionmanagementApplication.class, args);
	}

}

//to kill a task because port 8080 is already in use
//netstat -ano | findstr *<port used>*
//taskkill /F /PID *<pid>*