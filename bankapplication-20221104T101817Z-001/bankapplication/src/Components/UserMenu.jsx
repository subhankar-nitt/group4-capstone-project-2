import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const UserMenu = () => {
    return (
        <div className='auth d-flex flex-row '>
            <ul
                className='ml-auto mr-auto col-12 col-md-5 col-lg-4 form d-flex flex-column'
                style={{ marginTop: "100px" }}>
                <Button className='links '>
                    <Link to='/applyLoan'>Apply For Loans</Link>
                </Button>
                <Button className='links'>
                    <Link to='/transactions'>Transactions</Link>
                </Button>
                <Button className='links'>
                    <Link to='/statement'>View Statements</Link>
                </Button>
            </ul>
        </div>
    );
};

export default UserMenu;
