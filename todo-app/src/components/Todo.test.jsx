import React from "react";
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest"
import Todo from "./Todo";

describe("Todo Component", () => {
    it("renders a todo item and allows checking boxes and deleting", async () => {
        const mockToggleTodo = vi.fn();
        const mockRemoveTodo = vi.fn();
        const todo = { id: 1, text: "Test Todo", completed: false };
        const user = userEvent.setup();

        render(
            <Todo
                todo={todo}
                toggleTodo={mockToggleTodo}
                removeTodo={mockRemoveTodo}
            />
        );

        // Check if the todo text is rendered
        const todoText = screen.getByText("Test Todo");
        expect(todoText).toBeInTheDocument();

        // Check if the checkbox is rendered and not checked
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        // Simulate checking the checkbox
        await user.click(checkbox);
        expect(mockToggleTodo).toHaveBeenCalledWith(1);

        // Simulate clicking the delete button
        const deleteButton = screen.getByRole("button", { name: /delete/i });
        await user.click(deleteButton);
        expect(mockRemoveTodo).toHaveBeenCalledWith(1);

    })
}); 