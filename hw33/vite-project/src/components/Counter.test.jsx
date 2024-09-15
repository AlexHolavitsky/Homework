import { render, screen, waitFor } from "@testing-library/react";
import {describe, expect, it} from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe ('Counter Component', () => {
    it('render with initial state',()=>{
        render (<Counter />);
        expect(screen.getByText(/Counter:0/i)).toBeInTheDocument();
        // /Counter: 0/i
    });

    it('increases counter when the button is clicked', async ()=>{
        render (<Counter />);
        userEvent.click(screen.getByText('increment'));
        await waitFor(() => expect(screen.getByText(/Counter:0/i)).toBeInTheDocument());
    });

    it('decreases counter when the button is clicked', async ()=>{
        render (<Counter />);
        userEvent.click(screen.getByText('decrement'));
        await waitFor(() => expect(screen.getByText(/Counter:-1/i)).toBeInTheDocument());
    });
});