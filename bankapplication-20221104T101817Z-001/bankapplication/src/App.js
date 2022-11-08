import logo from "./logo.svg";
import "./App.css";
import Userlogin from "./Components/Userlogin";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserRegisteration from "./Components/UserRegisteration";
import UserMenu from "./Components/UserMenu";
import ApplyLoan from "./Components/ApplyLoan";
import TransactionManagement from "./Components/TransactionManagement";
import ViewTransactions from "./Components/ViewTransactions";
import NavbarComponent from "./Components/Navbar";
import AuthContext from "./context/auth.context";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedIn ? (
                    <Comp {...props} />
                ) : (
                    <Navigate to='/login' />
                );
            }}
        />
    );
};
function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"));
            console.log(user);

            setUser(user.user);
        } else {
            localStorage.setItem("user", JSON.stringify({ user }));
        }
        setLoading(false);
    }, []);

    const login = (user) => {
        setUser(user);
        localStorage.setItem(
            "user",
            JSON.stringify({
                user,
                expiry: new Date(new Date().getTime() + 60000 * 60 * 1),
            }),
        );
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
    return (
        <BrowserRouter>
            <AuthContext.Provider
                value={{
                    user: user,
                    login: login,
                    logout: logout,
                }}>
                <NavbarComponent />
                {loading ? (
                    <h4>Loading ...</h4>
                ) : (
                    <main className='main d-flex flex-column'>
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    user ? (
                                        <UserMenu />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />

                            <Route path='/login' element={<Userlogin />} />

                            <Route
                                path='/register'
                                element={<UserRegisteration />}
                            />

                            {/* <ProtectedRoute
                            loggedIn={user}
                            path='/applyLoan'
                            exact
                            component={ApplyLoan}
                        /> */}
                            <Route
                                path='/applyLoan'
                                element={
                                    user ? (
                                        <ApplyLoan />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />
                            {/* <Route path='/applyLoan' element={<ApplyLoan />} /> */}

                            <Route
                                path='/transactions'
                                element={
                                    user ? (
                                        <TransactionManagement />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />

                            <Route
                                path='/statement'
                                element={
                                    user ? (
                                        <ViewTransactions />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            />
                        </Routes>
                    </main>
                )}
            </AuthContext.Provider>
        </BrowserRouter>
    );
}

export default App;
