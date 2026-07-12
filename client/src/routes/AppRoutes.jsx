import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import SignUpForm from '../pages/auth/SignUpForm';
import LoginForm from '../pages/auth/LoginForm';
import HomePage from '../pages/HomePage';


function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default AppRoutes;
