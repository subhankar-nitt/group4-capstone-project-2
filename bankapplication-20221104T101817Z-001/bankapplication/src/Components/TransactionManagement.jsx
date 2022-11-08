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
    });

    const apply = () => {};
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
                <h2>Global Bank User Transaction Page</h2>
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
                        <Label for='amount'>Loan Amount</Label>

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
