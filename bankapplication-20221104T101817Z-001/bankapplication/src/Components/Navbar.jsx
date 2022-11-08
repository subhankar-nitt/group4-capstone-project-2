import React, { useState, useContext } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
// import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Alert,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from "reactstrap";
// import { types } from "../assets/data";
import AuthContext from "../context/auth.context";

const NavbarComponent = () => {
    const context = useContext(AuthContext);
    const [error] = useState("");
    const [showError, setShowError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const logout = () => {
        context.logout();
        Navigate("/login");
    };
    return (
        <div>
            <Alert
                color='danger'
                isOpen={showError}
                toggle={() => {
                    setShowError(false);
                }}>
                {error}
            </Alert>
            <Navbar
                fixed='true'
                expand='lg'
                className='justify-content-between'
                style={{ zIndex: "1" }}>
                <div>
                    <Link
                        to='/'
                        className='navbar-brand Raleway text-align-center'>
                        <img
                            // src={logo}
                            alt=''
                            className='img-fluid mr-1'
                            style={{ maxHeight: "30px" }}
                        />
                        GLOBAL BANK USER MANAGEMENT
                    </Link>
                </div>
                <NavbarToggler
                    onClick={toggle}
                    className={` position-relative ${
                        !isOpen ? "collapsed" : ""
                    }`}>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </NavbarToggler>

                <Collapse
                    isOpen={isOpen}
                    navbar
                    className='justify-content-lg-center'>
                    <Nav
                        className='row justify-content-end pl-5 pr-3 w-100'
                        navbar>
                        {context.user ? (
                            <>
                                <NavItem className='m-1 my-2 my-lg-1 ml-lg-auto'>
                                    <NavLink to='/' exact>
                                        User Menu
                                    </NavLink>
                                </NavItem>

                                <NavItem className='m-1 my-2 my-lg-1 ml-lg-auto'>
                                    <a
                                        className='link'
                                        href='.'
                                        onClick={logout}>
                                        Logout
                                    </a>
                                </NavItem>
                            </>
                        ) : (
                            <>
                                <NavItem className='m-1 my-2 my-lg-1'>
                                    <NavLink to='/login'>Login</NavLink>
                                </NavItem>
                                <NavItem className='m-1 my-2 my-lg-1'>
                                    <NavLink to='/register'>Register</NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default NavbarComponent;
