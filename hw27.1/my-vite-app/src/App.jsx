import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    useEffect(() => {
        // Apply the saved theme from localStorage or default to 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.className = savedTheme;
    }, []);

    return (
        <Router>
            <ErrorBoundary>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ErrorBoundary>
        </Router>
    );
}

export default App;