import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Timer from "./Timer";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Timer", () => {
    it("shows correct time", () => {
        render(
            <BrowserRouter>
                <Timer newTime={300} />
            </BrowserRouter>
        );
        expect(screen.getByTestId('hours')).toHaveTextContent('00');
        expect(screen.getByTestId('minutes')).toHaveTextContent('05');
        expect(screen.getByTestId('seconds')).toHaveTextContent('00');
    });

    it("shows buttons on page", () => {
        render(
            <BrowserRouter>
                <Timer newTime={300} />
            </BrowserRouter>
        );
        const startButton = screen.getByText('Start');
        const selectButton = screen.getByText('Select Time');
        expect(startButton).toBeInTheDocument();
        expect(selectButton).toBeInTheDocument();
    });

    it("shows start button when clicked and time is zero", () => {
        render(
            <BrowserRouter>
                <Timer />
            </BrowserRouter>
        );
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        expect(startButton).toHaveTextContent('Start');
    });

    it("shows pause button when clicked and time is more than zero", () => {
        render(
            <BrowserRouter>
                <Timer newTime={300} />
            </BrowserRouter>
        );
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        expect(startButton).toHaveTextContent('Pause');
    });

    it("renders form when select button is clicked", async () => {
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
    });

    it("changes time when start button is clicked", async () => {
        render(
            <BrowserRouter>
                <Timer newTime={300} />
            </BrowserRouter>
        )
        const user = userEvent.setup();
        const hours = screen.getByTestId('hours');
        const minutes = screen.getByTestId('minutes');
        const seconds = screen.getByTestId('seconds');
        const startButton = screen.getByText('Start');
        await user.click(startButton);
        expect(startButton).toHaveTextContent('Pause');
        await waitFor(() => {
            expect(hours).toHaveTextContent('00');
            expect(minutes).toHaveTextContent('04');
            expect(seconds).toHaveTextContent('59');
        });
    });
});