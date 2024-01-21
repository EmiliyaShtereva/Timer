import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form", () => {
    it("renders form", () => {
        render(
            <BrowserRouter>
                <Form />
            </BrowserRouter>
        );
        expect(screen.getByText('Update Time')).toBeInTheDocument();
    });

    it("shows buttons on page", () => {
        render(
            <BrowserRouter>
                <Form />
            </BrowserRouter>
        );
        const submitButton = screen.getByText('New Time');
        expect(submitButton).toBeInTheDocument();
    });

    it("shows changed input value", () => {
        render(
            <BrowserRouter>
                <Form />
            </BrowserRouter>
        );
        const minutesInput = screen.getByTestId('minutesInput');
        fireEvent.change(minutesInput, { target: { value: '5' } });
        expect(minutesInput.value).toBe('5');
    });

    it("renders timer when new time button is clicked and the time is changed", async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const user = userEvent.setup();
        expect(screen.getByTestId('hours')).toHaveTextContent('00');
        const selectButton = screen.getByText('Select Time');
        await user.click(selectButton);
        expect(screen.getByText('Update Time')).toBeInTheDocument();
        const minutesInput = screen.getByTestId('minutesInput');
        fireEvent.change(minutesInput, { target: { value: '5' } });
        expect(minutesInput.value).toBe('5');
        const submitButton = screen.getByText('New Time');
        await user.click(submitButton);
        const minutes = screen.getByTestId('minutes');
        expect(minutes).toBeInTheDocument();
        expect(minutes).toHaveTextContent('05');
    });
});