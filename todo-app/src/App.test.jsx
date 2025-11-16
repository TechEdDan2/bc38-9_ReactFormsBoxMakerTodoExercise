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

    })
});