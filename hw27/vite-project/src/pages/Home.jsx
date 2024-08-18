import React from 'react';
import TodoList from '../components/TodoList';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ThemeSwitcher />
            <TodoList />
        </div>
    );
};

export default Home;
