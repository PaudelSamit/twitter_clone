import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import './App.css';
const Shell = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Shell;