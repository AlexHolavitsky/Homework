import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button 
        type="button" className="btn btn-light "     
         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>          
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    );
};

export default ThemeSwitcher;


