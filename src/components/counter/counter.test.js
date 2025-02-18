import React from "react";
import Counter from "./counter";
import {fireEvent, render, screen} from "@testing-library/react"

describe('counter Component', () => {
    test("renders counter component", () => {
        render(<Counter/>);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(
            "Value Of Counter : 0"
        );
    })
    test("increment counter when increase button is clicked", () => {
        render(<Counter/>);
        const input = screen.getByTestId("value_inc");
        const button = screen.getByTestId("button_inc");

        fireEvent.change(input, {target:{value:"5"}});
        fireEvent.click(button);

        expect(screen.getByTestId("counter-value")).toHaveTextContent(
            "Value Of Counter : 5"
        );
    })
    test("decrement counter when decrease button is clicked", () => {
        render(<Counter/>);
        const input = screen.getByTestId("value_dec");
        const button = screen.getByTestId("button_dec");

        fireEvent.change(input, {target:{value:"5"}});
        fireEvent.click(button);

        expect(screen.getByTestId("counter-value")).toHaveTextContent(
            "Value Of Counter : -5"
        );
    })
    test("logs section is rendered when logs exists", () => {
        render(<Counter/>);
        const input = screen.getByTestId("value_dec");
        const button = screen.getByTestId("button_dec");

        fireEvent.change(input, {target:{value:"5"}});
        fireEvent.click(button);

        const logSection = screen.getByTestId("logs-section");
        expect(logSection).toBeInTheDocument();
       
    })
    test("toggle warning message", () => {
        render(<Counter/>);
        const input = screen.getByTestId("value_dec");
        const button = screen.getByTestId("button_dec");

        fireEvent.change(input, {target:{value:"5"}});
        fireEvent.click(button);

        const toggleLogs_Button = screen.getByTestId("toggle-logs");
        fireEvent.click(toggleLogs_Button);

        const log_info  = screen.getByTestId("log_info");
        fireEvent.mouseEnter(log_info);
        expect(screen.getByTestId("warning-message")).toBeInTheDocument();

        fireEvent.mouseLeave(log_info);
        expect(screen.queryByTestId("warning-message")).not.toBeInTheDocument();

       
    })

    test("should delete logs", () => {
        render(<Counter/>);
        const input = screen.getByTestId("value_dec");
        const button = screen.getByTestId("button_dec");

        fireEvent.change(input, {target:{value:"5"}});
        fireEvent.click(button);

        fireEvent.change(input, {target:{value:"5"}});
        fireEvent.click(button);

        const toggleLogs_Button = screen.getByTestId("toggle-logs");
        fireEvent.click(toggleLogs_Button);

        let logs = screen.getAllByTestId("log_info");
        expect(logs.length).toBe(2);

        fireEvent.click(logs[0]);
         logs = screen.getAllByTestId("log_info");
        expect(logs.length).toBe(1);

        fireEvent.click(logs[0]);
        logs = screen.queryByTestId("log_info");
       expect(logs).not.toBeInTheDocument();

        
       
    })
})