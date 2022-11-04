import logo from "./logo.svg";
import "./App.css";
import Userlogin from "./Components/Userlogin";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import UserRegisteration from "./Components/UserRegisteration";
import UserMenu from "./Components/UserMenu";
function App() {
    return (
        <BrowserRouter>
            <main className='d-flex flex-column'>
                <Routes>
                    <Route path='/' element={<UserMenu />} />
                </Routes>
                <Routes>
                    <Route path='/login' element={<Userlogin />} />
                </Routes>
                <Routes>
                    <Route path='/register' element={<UserRegisteration />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
