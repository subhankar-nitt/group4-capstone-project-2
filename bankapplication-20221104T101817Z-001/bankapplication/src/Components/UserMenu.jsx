import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const UserMenu = () => {
    return (
        <div className='auth d-flex flex-row justify-content-center'>
            <ul
                className='ml-auto mr-auto col-12 col-md-5 col-lg-4 form d-flex flex-column'
                style={{ marginTop: "100px" }}>
                <Link to='/applyLoan'>
                    <Button color='primary' className='links '>
                        Apply For Loans
                    </Button>
                </Link>
                <Link to='/transactions'>
                    <Button color='primary' className='links'>
                        Transactions
                    </Button>
                </Link>
                <Link to='/statement'>
                    <Button color='primary' className='links'>
                        View Statements
                    </Button>
                </Link>
            </ul>
        </div>
    );
};

export default UserMenu;
