import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router";
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
const validatePassword = (pass) => pass.length >= 8;
const validateUserid = (val) => val.length >= 8;

const validateField = (field, value) => {
    switch (field) {
        case "userId":
            return validateUserid(value);
        case "password":
            return validatePassword(value);
        default:
            return false;
    }
};
const Userlogin = () => {
    const [credentials, setCredentials] = useState({});
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const [valid, setValid] = useState({
        userId: true,
        password: true,
        contact: true,
        firstName: true,
        lastName: true,
    });
    const submit = (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:8080/user/${credentials.userId}`)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data.password === credentials.password) {
                    context.login(credentials.userId);
                    navigate("/");
                } else navigate("/register");
            });

        // if (
        //     credentials.userId === "11111111" &&
        //     credentials.password === "12345678"
        // ) {
        //     context.login(credentials.userId);
        //     navigate("/");
        // } else navigate("/register");
    };

    const handleChange = async (e) => {
        setCredentials({
            ...credentials,
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
                <h2>Global Bank User Login Page</h2>
                <Form onSubmit={submit}>
                    <FormGroup>
                        <Label for='userId'>Customer ID</Label>
                        <Input
                            type='text'
                            name='userId'
                            id='userId'
                            placeholder='userId'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.userId === "" || !valid.userId
                            }
                        />
                        <FormFeedback>
                            Please enter a 8 character valid UserId
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>

                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.password === "" || !valid.password
                            }
                        />
                        <FormFeedback>
                            Password length should be at least 8
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
                                        disabled={
                                            !(valid.userId && valid.password)
                                        }>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </>
                    </FormGroup>

                    <FormGroup style={{ marginTop: "50px" }}>
                        <h5 className='text-align-center'>
                            Welcome to the bank,{" "}
                            <Link to='/register'>Click here to register</Link>
                        </h5>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
};

export default Userlogin;
