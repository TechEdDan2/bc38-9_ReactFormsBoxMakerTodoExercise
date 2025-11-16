import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
    it("renders the app and allows adding a new todo", async () => {
        render(<App />);
        const user = userEvent.setup();

        // Check if the heading is present
        const heading = screen.getByRole("heading", { name: /Vite \+ React Todo List/i });
        expect(heading).toBeInTheDocument();

        // Check if the input and button are present
        const input = screen.getByPlaceholderText("Enter Todo");
        console.log("Input Element:", input);
        expect(input).toBeInTheDocument();

        const button = screen.getByRole("button", { name: /Submit/i });
        console.log("Button Element:", button);
        expect(button).toBeInTheDocument();

        // Simulate user typing a new todo
        await user.type(input, "New Todo Item");
        expect(input).toHaveValue("New Todo Item");

        // Simulate form submission
        await user.click(button);

        // Check if the new todo item is added to the list
        const newTodo = screen.getByText("New Todo Item");
        expect(newTodo).toBeInTheDocument();



    })
});