import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import IncidentManagementPage from './components/IncidentManagementPage';
import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/incidents" element={<IncidentManagementPage />} />
            </Routes>
        </Router>
    );
};

export default App;
