import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    ModalBody,
    ModalFooter,
    FormFeedback,
    Label,
} from "reactstrap";
const validatePassword = (pass) => pass.length >= 8;
const validateUserid = (val) => val.length >= 8;

const validateField = (field, value) => {
    switch (field) {
        case "userId":
            return validateUserid(value);
        case "password":
            return validatePassword(value);
        default:
            return value !== "";
        // return true;
    }
};
const UserRegistration = () => {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();
    const [valid, setValid] = useState({
        userId: true,
        password: true,
        contact: true,
        firstName: true,
        lastName: true,
        middleName: true,
        occupation: true,
        city: true,
    });
    const submit = (e) => {
        e.preventDefault();
        navigate("/login");
        // else navigate("/register");
        console.log(credentials);
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
    const isValid = () => {
        let bool = true;
        for (let i in valid) {
            bool &= valid[i];
        }

        return bool;
    };
    return (
        <div className='auth d-flex flex-row '>
            <div
                className='ml-auto mr-auto col-12 col-md-7 col-lg-6 form'
                style={{ marginTop: "100px" }}>
                <h2>Global Bank User Opening Page</h2>
                <Form onSubmit={submit}>
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input
                            type='text'
                            name='firstName'
                            id='firstName'
                            placeholder='firstName'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.firstName === "" ||
                                !valid.firstName
                            }
                        />
                        <FormFeedback>
                            Please enter valid First Name
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='lastName'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.lastName === "" || !valid.lastName
                            }
                        />
                        <FormFeedback>
                            Please enter valid Last Name
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='middleName'>middle Name</Label>
                        <Input
                            type='text'
                            name='middleName'
                            id='middleName'
                            placeholder='middleName'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.middleName === "" ||
                                !valid.middleName
                            }
                        />
                        <FormFeedback>
                            Please enter valid middle Name
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>Customer City</Label>
                        <Input
                            type='text'
                            name='city'
                            id='city'
                            placeholder='city'
                            onChange={handleChange}
                            required
                            invalid={credentials?.city === "" || !valid.city}
                        />
                        <FormFeedback>Please enter valid city</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>Customer Contact</Label>
                        <Input
                            type='text'
                            name='contact'
                            id='contact'
                            placeholder='contact'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.contact === "" || !valid.contact
                            }
                        />
                        <FormFeedback>Please enter valid contact</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>Customer Occupation</Label>
                        <Input
                            type='text'
                            name='occupation'
                            id='occupation'
                            placeholder='occupation'
                            onChange={handleChange}
                            required
                            invalid={
                                credentials?.occupation === "" ||
                                !valid.occupation
                            }
                        />
                        <FormFeedback>
                            Please enter valid occupation
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>Customer DOB</Label>
                        <Input
                            type='date'
                            name='dob'
                            id='dob'
                            placeholder='date placeholder'
                            onChange={handleChange}
                            required
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
                                        color='secondary'
                                        className='ml-auto mr-auto'
                                        disabled={!isValid}>
                                        Register
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

export default UserRegistration;
