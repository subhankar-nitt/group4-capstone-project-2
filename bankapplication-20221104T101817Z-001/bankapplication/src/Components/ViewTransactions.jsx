import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Table,
    Input,
    FormFeedback,
    Label,
} from "reactstrap";
const transactionTypes = ["all", "withdraw", "deposit"];

const validateAmount = (val) => !isNaN(val) && val >= 0;
const validateField = (field, value) => {
    switch (field) {
        case "amount":
            return validateAmount(value);
        case "branch":
            return true;
        case "from":
            return value !== "";
        case "to":
            return value !== "";
        default:
            return false;
    }
};
const ViewTransactions = () => {
    const [transaction, setTransaction] = useState({
        transactionType: transactionTypes[0],
    });
    const [valid, setValid] = useState({
        amount: true,
        from: true,
        to: true,
    });
    const transactions = [
        {
            userId: "12345678",
            name: "USER",
            dateOfTranction: new Date(),
            mediumOfTransaction: "UPI",
            amount: "123",
        },
        {
            userId: "098709483",
            name: "USER2",
            dateOfTranction: new Date(),
            mediumOfTransaction: "UPI",
            amount: "123",
        },
    ];
    const handleChange = async (e) => {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value,
        });
        await setValid({
            ...valid,
            [e.target.name]: validateField(e.target.name, e.target.value),
        });
    };
    const apply = () => {};

    return (
        <div className='auth d-flex flex-column align-items-center justify-content-center'>
            <div
                className='ml-auto mr-auto col-12 col-md-7 col-lg-6 form '
                style={{ marginTop: "100px" }}>
                <h2>Global Bank User View Statement page</h2>
                <Form onSubmit={apply}>
                    <FormGroup>
                        <Label for='userId'>Customer ID</Label>
                        <Input
                            type='text'
                            name='userId'
                            id='userId'
                            placeholder='userId'
                            value={transaction.userId}
                            // onChange={handleChange}
                            required
                            disabled
                            // invalid={
                            //     transaction?.userId === "" || !valid.userId
                            // }
                        />
                        <FormFeedback>
                            Please enter a 8 character valid UserId
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
                        <Label for='city'>Transaction period from</Label>
                        <Input
                            type='date'
                            name='from'
                            id='from'
                            placeholder='Transaction period from'
                            onChange={handleChange}
                            required
                            invalid={transaction?.from === "" || !valid.from}
                        />
                        <FormFeedback>Please enter valid date</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>Transaction period to</Label>
                        <Input
                            type='date'
                            name='to'
                            id='to'
                            placeholder='Transaction period to'
                            onChange={handleChange}
                            required
                            invalid={transaction?.to === "" || !valid.to}
                        />
                        <FormFeedback>Please enter valid date</FormFeedback>
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
                                        VIEW
                                    </Button>
                                </div>
                            </div>
                        </>
                    </FormGroup>
                </Form>
            </div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <td>dateOfTranction</td>
                        <td>userId</td>
                        <td>name</td>
                        <td>mediumOfTransaction</td>
                        {(transaction.transactionType === "withdraw" ||
                            transaction.transactionType === "all") && (
                            <td>Withdrawals</td>
                        )}
                        {(transaction.transactionType === "deposit" ||
                            transaction.transactionType === "all") && (
                            <td>Deposits</td>
                        )}
                        {/* <td>amount</td> */}
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tr, ind) => (
                        <tr>
                            <td>{tr.userId}</td>
                            <td>{tr.name}</td>
                            <td>{tr.dateOfTranction.toString()}</td>
                            <td>{tr.mediumOfTransaction}</td>
                            {(transaction.transactionType === "withdraw" ||
                                transaction.transactionType === "all") && (
                                <td>{tr.amount}</td>
                            )}
                            {(transaction.transactionType === "deposit" ||
                                transaction.transactionType === "all") && (
                                <td>{tr.amount}</td>
                            )}
                            {/* <td>{tr.amount}</td> */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ViewTransactions;
