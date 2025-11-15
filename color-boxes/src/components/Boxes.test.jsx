import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Boxes from "./Boxes";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/vitest';

describe("Boxes Component", () => {
    it("renders Boxes component without crashing", () => {
        render(<Boxes />);

        // Check if the initial boxes are rendered
        const removeButtons = screen.getAllByRole('button', { name: /x/i }); // Look for all "X" buttons
        expect(removeButtons.length).toBe(3); // Expect 3 initial boxes 2 x "Remove" buttons 1 x create box button
    });
});