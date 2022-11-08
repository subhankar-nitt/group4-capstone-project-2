package com.example.group4project2.globaluserbankmanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="user_details")
@Entity
public class User_Details {
    
    @Id
    @Column(name="customer_id")
    String customer_id;


    @Column(name="pass")
    String password;

    // public User_Details(){

    // }
    // public User_Details(String customer_id,String password){

    //     super();
    //     this.customer_id=customer_id;
    //     this.password=password;
    // }
    // public void setCustomerId(String Customer_id){
    //     this.customer_id=customer_id;
    // }
    // public String getCustomerId(){
    //     return this.customer_id;
    // }
    // public String getPassword(){
    //     return this.password;
    // }
    // public void setPassword(String password){
    //     this.password=password;
    // }

}
