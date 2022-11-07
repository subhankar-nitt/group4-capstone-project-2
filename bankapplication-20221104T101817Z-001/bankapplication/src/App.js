import logo from "./logo.svg";
import "./App.css";
import Userlogin from "./Components/Userlogin";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import UserRegisteration from "./Components/UserRegisteration";
import UserMenu from "./Components/UserMenu";
import ApplyLoan from "./Components/ApplyLoan";
import TransactionManagement from "./Components/TransactionManagement";
function App() {
    return (
        <BrowserRouter>
            <main className='main d-flex flex-column'>
                <Routes>
                    <Route path='/' element={<UserMenu />} />
                </Routes>
                <Routes>
                    <Route path='/login' element={<Userlogin />} />
                </Routes>
                <Routes>
                    <Route path='/register' element={<UserRegisteration />} />
                </Routes>
                <Routes>
                    <Route path='/applyLoan' element={<ApplyLoan />} />
                </Routes>
                <Routes>
                    <Route
                        path='/transactions'
                        element={<TransactionManagement />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
