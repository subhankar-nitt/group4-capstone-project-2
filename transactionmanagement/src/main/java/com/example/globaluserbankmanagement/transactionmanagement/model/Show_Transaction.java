package com.example.globaluserbankmanagement.transactionmanagement.model;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Show_Transaction {
    
    private String account_number;
    private String transaction_type;
    private String start_date;
    private String end_date;
}
