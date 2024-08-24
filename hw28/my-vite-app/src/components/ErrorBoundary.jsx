import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error occurred:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Возникла какая-то ошибка. Что-то пошло не так.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
