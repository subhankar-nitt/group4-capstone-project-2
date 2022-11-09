import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input,
    FormFeedback,
    Label,
} from "reactstrap";
import AuthContext from "../context/auth.context";

const validateAmount = (val) => !isNaN(val) && val >= 0;
const validateField = (field, value) => {
    switch (field) {
        case "amount":
            return validateAmount(value);
        case "branch":
            return true;
        case "transaction_number":
            return value.length > 0;
        case "medium_of_transaction":
            return value.length > 0;
        default:
            return false;
    }
};
const transactionTypes = ["withdraw", "deposit"];

const TransactionManagement = () => {
    const context = useContext(AuthContext);

    const [loan, setLoan] = useState({
        userId: context.user,

        transactionType: transactionTypes[0],
    });
    const [valid, setValid] = useState({
        amount: true,
        medium_of_transaction: true,
        transaction_number: true,
    });
    const navigate = useNavigate();

    const apply = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8080/addTransactions/`, {
                transaction_number: loan.transaction_number,
                account_number: loan.userId,
                medium_of_transaction: loan.medium_of_transaction,
                date_of_transaction: new Date().toISOString().split("T")[0],
                transaction_type: loan.transactionType,
                transaction_amount: loan.transaction_amount,
            })
            .then((resp) => {
                console.log(resp);
                alert("Transaction completed successfully");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response?.data?.message);
                alert(err.response?.data?.message);
            });
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
                <h2>Transaction Page</h2>
                <Form onSubmit={apply}>
                    <FormGroup>
                        <Label for='userId'>Transaction Number</Label>
                        <Input
                            type='text'
                            name='transaction_number'
                            id='transaction_number'
                            placeholder='transaction_number'
                            value={loan.transaction_number}
                            onChange={handleChange}
                            required
                            invalid={
                                loan?.transaction_number === "" ||
                                !valid.transaction_number
                            }
                        />
                        <FormFeedback>
                            Please enter a valid account number
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='userId'>Account number</Label>
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
                            Please enter a valid account number
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='amount'>Select the transaction</Label>
                        <Input
                            type='select'
                            name='transactionType'
                            id='transactionType'
                            onChange={handleChange}>
                            {transactionTypes.map((t) => (
                                <option key={t}>{t}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='amount'>Medium of Transaction</Label>

                        <Input
                            type='text'
                            name='medium_of_transaction'
                            id='medium_of_transaction'
                            placeholder='Medium of Transaction'
                            onChange={handleChange}
                            required
                            invalid={
                                loan?.medium_of_transaction === "" ||
                                !valid.medium_of_transaction
                            }
                        />
                        <FormFeedback>
                            Enter a valid medium of transaction
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='amount'>Transaction Amount</Label>

                        <Input
                            type='number'
                            name='amount'
                            id='amount'
                            placeholder='Transaction Amount'
                            onChange={handleChange}
                            required
                            invalid={loan?.amount === "" || !valid.amount}
                        />
                        <FormFeedback>
                            Amount should be not be negative
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

export default TransactionManagement;
