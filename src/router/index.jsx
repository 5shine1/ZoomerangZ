import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MainPage from "../pages/MainPage";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/mainPage" element={<MainPage />} />


            </Routes>
        </Router>
    );
};

export default AppRouter;