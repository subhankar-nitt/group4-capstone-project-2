import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input,
    FormFeedback,
    Label,
} from "reactstrap";
import AuthContext from "../context/auth.context";

const validateAmount = (val) => !isNaN(val) && val >= 0 && val <= 100000;
const validateField = (field, value) => {
    switch (field) {
        case "amount":
            return validateAmount(value);
        case "branch":
            return true;
        default:
            return false;
    }
};
const branches = ["BLR", "HYD","KOL","CHEN","MUM","DEL","GUR"];
const ApplyLoan = () => {
    const context = useContext(AuthContext);

    const [loan, setLoan] = useState({
        userId: context.user,
        branch: branches[0],
    });
    const [valid, setValid] = useState({
        amount: true,
    });
    const navigate = useNavigate();

    const apply = (e) => {
        e.preventDefault();
        console.log(loan);
        axios.post('http://localhost:8082/addLoan',{
            customer_number:loan.userId,
            loan_amount:loan.amount,
            branch_id:loan.branch

        })
        .then(resp=>{
            console.log(resp.data);
            alert('Loan applied successfully ! ');
            navigate('/')
        }).catch(err=>{
            console.log(err.response)
        })
    };
    const handleChange = async (e) => {
        setLoan({
            ...loan,
            [e.target.name]: e.target.value,
        });
        await setValid({
            ...valid,
            [e.target.name]: validateField(e.target.name, e.target.value),
        });
    };
    return (
        <div className='auth d-flex flex-row justify-content-center'>
            <div
                className='ml-auto mr-auto col-12 col-md-7 col-lg-6 form '
                style={{ marginTop: "100px" }}>
                <h2>Loan application Page</h2>
                <Form onSubmit={apply}>
                    <FormGroup>
                        <Label for='userId'>Customer ID</Label>
                        <Input
                            type='text'
                            name='userId'
                            id='userId'
                            placeholder='userId'
                            value={loan.userId}
                            // onChange={handleChange}
                            required
                            disabled
                            // invalid={
                            //     loan?.userId === "" || !valid.userId
                            // }
                        />
                        <FormFeedback>
                            Please enter a 8 character valid UserId
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='amount'>Select the branch</Label>
                        <Input
                            type='select'
                            name='branch'
                            id='branch'
                            onChange={handleChange}>
                            {branches.map((branch) => (
                                <option key={branch}>{branch}</option>
                            ))}
                        </Input>
                        {/* <Input
                            type='amount'
                            name='amount'
                            id='amount'
                            placeholder='Loan Amount'
                            onChange={handleChange}
                            required
                            invalid={loan?.amount === "" || !valid.amount}
                        /> */}
                        <FormFeedback>
                            Amount should be between 0 and 100000
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='amount'>Enter the Loan Amount</Label>

                        <Input
                            type='amount'
                            name='amount'
                            id='amount'
                            placeholder='Loan Amount'
                            onChange={handleChange}
                            required
                            invalid={loan?.amount === "" || !valid.amount}
                        />
                        <FormFeedback>
                            Amount should be between 0 and 100000
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup className=''>
                        <>
                            <div className=' text-align-end ml-auto mr-auto'>
                                <div
                                    className='ml-auto mr-auto'
                                    style={{ width: "fit-content" }}>
                                    <Button
                                        color='primary'
                                        className='ml-auto mr-auto'
                                        disabled={!valid.amount}>
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </>
                    </FormGroup>

                    {/* <FormGroup style={{ marginTop: "50px" }}>
                        <h5 className='text-align-center'>
                            Welcome to the bank,{" "}
                            <Link to='/register'>Click here to register</Link>
                        </h5>
                    </FormGroup> */}
                </Form>
            </div>
        </div>
    );
};

export default ApplyLoan;
