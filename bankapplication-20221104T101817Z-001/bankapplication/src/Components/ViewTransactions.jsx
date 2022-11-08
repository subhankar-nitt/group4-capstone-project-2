import axios from "axios";
import React from "react";

import { useContext, useState } from "react";
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
import AuthContext from "../context/auth.context";

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
const transactionsList = [
    {
        userId: "12345678",
        name: "USER",
        dateOfTranction: new Date("11/05/2022"),
        mediumOfTransaction: "UPI",
        amount: "123",
        transactionType: "withdraw",
    },
    {
        userId: "098709483",
        name: "USER2",
        dateOfTranction: new Date("11/11/2022"),
        mediumOfTransaction: "UPI",
        amount: "123",
        transactionType: "deposit",
    },
];
const ViewTransactions = () => {
    const context = useContext(AuthContext);

    const [transaction, setTransaction] = useState({
        transactionType: transactionTypes[0],
        userId: context.user,
    });
    const [valid, setValid] = useState({
        amount: true,
        from: true,
        to: true,
    });
    const [transactions, setTransactions] = useState([]);
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
    const apply = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8081/getTransactions/`, {
            "account_number": transaction.userId,
            "transaction_type": transaction.transactionType,
            "start_date": transaction.from,
            "end_date": transaction.to
        })
            .then(resp => { console.log(resp); setTransactions(resp.data) })
            .catch(err => {
                console.log(err.response?.data?.message);
                alert(err.response?.data?.message);

            })
        // setTransactions(
        //     transactionsList.filter(
        //         (trans) =>
        //             (trans?.to
        //                 ? new Date(trans.dateOfTranction) <=
        //                 new Date(transaction.to)
        //                 : true) &&
        //             (trans?.before
        //                 ? new Date(trans.dateOfTranction) >=
        //                 new Date(transaction.before)
        //                 : true) &&
        //             (transaction.transactionType !== "all"
        //                 ? trans.transactionType === transaction.transactionType
        //                 : true),
        //     ),
        // );
    };

    return (
        <div className='auth d-flex flex-column align-items-center justify-content-center'>
            <div
                className='ml-auto mr-auto col-12 col-md-7 col-lg-6 form '
                style={{ marginTop: "30px" }}>
                <h2 className='row'>
                    <span className='col-12'>View Statement page</span>
                </h2>
                <Form onSubmit={apply} className='row px-0'>
                    <FormGroup className='col-12 col-lg-6 mr-1'>
                        <Label for='userId'>Account number</Label>
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
                    <FormGroup className='col-12 col-lg-6 ml-1'>
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
                    <FormGroup className='col-12 col-lg-6 mr-1'>
                        <Label for='city'>Transaction period from</Label>
                        <Input
                            type='date'
                            name='from'
                            id='from'
                            placeholder='Transaction period from'
                            onChange={handleChange}
                        // required
                        // invalid={transaction?.from === "" || !valid.from}
                        />
                        <FormFeedback>Please enter valid date</FormFeedback>
                    </FormGroup>
                    <FormGroup className='col-12 col-lg-6 ml-1'>
                        <Label for='city'>Transaction period to</Label>
                        <Input
                            type='date'
                            name='to'
                            id='to'
                            placeholder='Transaction period to'
                            onChange={handleChange}
                        // required
                        // invalid={transaction?.to === "" || !valid.to}
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
            {transactions?.length ?
                <Table striped responsive hover>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Transaction Number</td>
                            <td>Account Number</td>
                            {/* <td>Name</td> */}
                            <td>Medium of Transaction</td>
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
                            <tr key={ind}>
                                <td>{new Date(tr.date_of_transaction).toDateString()}</td>
                                <td>{tr.transaction_number}</td>
                                <td>{tr.account_number}</td>
                                <td>{tr.medium_of_transaction}</td>
                                {transaction.transactionType === "all" ? (
                                    <>
                                        <td>
                                            {tr.transaction_type === "withdraw"
                                                ? tr.transaction_amount
                                                : ""}
                                        </td>
                                        <td>
                                            {tr.transaction_type === "deposit"
                                                ? tr.transaction_amount
                                                : ""}
                                        </td>
                                    </>
                                ) : (
                                    <td>{tr.transaction_amount}</td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </Table>:<></>}
        </div>
    );
};

export default ViewTransactions;
