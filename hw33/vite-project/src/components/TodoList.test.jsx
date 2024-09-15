// import {describe, expect, it} from "vitest";
// import TodoList from "./TodoList";
// import { fireEvent, render, screen } from "@testing-library/react";

import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  
  // 1. Тест на наявність заголовку "Todo List"
    test("Що сторінка має заголовок TODO", () => {
        render(<TodoList />);
        const headerElement = screen.getByText(/Todo list/i);
        expect(headerElement).toBeInTheDocument();
    });

  // 2. Тест, що у поле для тексту можна ввести як цифри, так і букви
    test("Що у поле для тексту можна ввести як цифри, так і букви", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Введіть текст/i);

        fireEvent.change(input, { target: { value: "123abc" } });
        expect(input.value).toBe("123abc");

        fireEvent.change(input, { target: { value: "456def" } });
        expect(input.value).toBe("456def");
    });

  // 3. Тест, що після натискання на кнопку "Додати" без тексту нічого не додається
    test("Можна протестувати, що після натискання на кнопку 'Додати' без тексту, ви отримаєте помилку (нічого не додається)", () => {
        render(<TodoList />);
        const button = screen.getByText(/Додати/i);
        const input = screen.getByPlaceholderText(/Введіть текст/i);

        fireEvent.click(button);
        const listItems = screen.queryAllByRole("listitem");
        expect(listItems.length).toBe(0);
    });

  // 4. Тест, що після вписання тексту і натискання на "Додати" додається новий елемент у список
    test("Після вписання тексту та натискання на 'Додати' отримуєте новий елемент у списку з потрібним текстом", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Введіть текст/i);
        const button = screen.getByText(/Додати/i);

        // Введення тексту в поле
        fireEvent.change(input, { target: { value: "Нове завдання" } });
        fireEvent.click(button);

        // Перевірка, що новий елемент з'явився у списку
        const listItem = screen.getByText(/Нове завдання/i);
        expect(listItem).toBeInTheDocument();
    });

   // 5.Перевірка, що після додавання завдання поле введення очищується
    test("Після додавання завдання поле введення очищується", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Введіть текст/i);
        const button = screen.getByText(/Додати/i);

        // Введення тексту і додавання
        fireEvent.change(input, { target: { value: "Тестове завдання" } });
        fireEvent.click(button);

        // Перевірка, що поле введення тепер порожнє
        expect(input.value).toBe('');
    });

    //6: Перевірка, що завдання можна позначити як виконане
    test("Можна позначити завдання як виконане", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Введіть текст/i);
        const button = screen.getByText(/Додати/i);

        // Додати завдання
        fireEvent.change(input, { target: { value: "Тестове завдання" } });
        fireEvent.click(button);

        // Натискання на кнопку "Complete"
        const completeButton = screen.getByText(/Complete/i);
        fireEvent.click(completeButton);

        // Перевірка, що завдання позначене як виконане
        const listItem = screen.getByText(/Тестове завдання/i);
        expect(listItem).toHaveStyle('text-decoration: line-through');
    });



});






// test('перевірка наявності заголовку TODO', () => {
//     render(<TodoList />);
//     const headingElement = screen.getByText(/Todo List/i);
//     expect(headingElement).toBeInTheDocument();
    
// });

// test('можна вводити цифри і букви в поле вводу', () => {
//     render(<TodoList />);
//     const inputElement = screen.getByPlaceholderText(/Введіть текст/i);
//     fireEvent.change(inputElement, { target: { value: 'Test123' } });
//     expect(inputElement.value).toBe('Test123');
// });

// // test('перевірка помилки при додаванні пустого поля', () => {
// //     render(<TodoList />);
// //     const button = screen.getByText(/Додати/i);
// //     fireEvent.click(button);
// //     const errorElement = screen.getByText(/Помилка: не можна додати порожній елемент/i);
// //     expect(errorElement).toBeInTheDocument();
// // });

// test('перевірка додавання нового елементу до списку', () => {
//     render(<TodoList />);
//     const inputElement = screen.getByPlaceholderText(/Введіть текст/i);
//     const button = screen.getByText(/Додати/i);
    
//     // Введення тексту
//     fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    
//     // Натискання кнопки
//     fireEvent.click(button);
  
//     // Перевірка, що новий елемент з’явився у списку
//     const listItemElement = screen.getByText(/New Todo Item/i);
//     expect(listItemElement).toBeInTheDocument();
// });

// test('новий елемент має правильний текст', () => {
//     render(<TodoList />);
//     const inputElement = screen.getByPlaceholderText(/Введіть текст/i);
//     const button = screen.getByText(/Додати/i);
    
//     // Введення тексту
//     fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    
//     // Натискання кнопки
//     fireEvent.click(button);
  
//     // Перевірка тексту доданого елементу
//     const listItemElement = screen.getByText(/New Todo Item/i);
//     expect(listItemElement.textContent).toBe('New Todo Item');
// });



// describe ('Todo List', () => {
//     it('render Todo Heading',() => {
//         render (<TodoList />);

//         expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
//     });

//     it('adds new todos',() => {
//         render (<TodoList />);

//         const input = screen.getByPlaceholderText(/add a todo/i);
//         const button = screen.getByText(/add todo/i);
//         fireEvent.change(input, {target: {value: 'Learn React'}});
//         fireEvent.click(button);
//         expect(screen.getByText('Learn React')).toBeInTheDocument();
//     });

//     it('marks a todo as completed',() => {
//         render (<TodoList />);
//         const input = screen.getByPlaceholderText(/add a todo/i);
//         const button = screen.getByText(/add todo/i);

//         //add text to input
//         fireEvent.change(input, {target: {value: 'Learn React'}});

//         //click button
//         fireEvent.click(button);

//         //click complete button
//         const completeButton = screen.getByText(/complete/i);
//         fireEvent.click(completeButton);

//         //check if todo is completed
//         const todoText = screen.getByText('Learn React');
        

        
//         expect(todoText).toHaveStyle('text-decoration: line-through');
//     });
// });