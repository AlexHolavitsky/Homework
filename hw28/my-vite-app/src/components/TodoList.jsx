import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const addTodo = (newTodo) => {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };
    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        // Update localStorage after removing a todo
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    return (
        <div>
            <h1>TODO List</h1>
            <Formik
                initialValues={{ todo: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.todo) {
                        errors.todo = 'Обов’язкове поле';
                    } else if (values.todo.length < 5) {
                        errors.todo = 'Мінімальна довжина 5 символів';
                    }
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    addTodo(values.todo);
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="todo" type="text" placeholder="Add a todo" />
                        <button id="addButton" className="btn btn-primary" type="submit">Add</button>
                        {errors.todo && touched.todo ? (
                            <div className="error" className="text-danger">{errors.todo}</div>
                        ) : null}
                    </Form>
                )}
            </Formik>
            <ol>
                {todos.map((todo, index) => (
                    <li className="ulInner"  key={index}>
                        {todo}
                        <button className="inner" onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
