import React, { ReactNode } from "react";
import { render } from "@testing-library/react";

// Test Custom Render for React Testing Library used to wrap or mock required components for testing such as Context https://testing-library.com/docs/react-testing-library/setup/
const TestWrapper = ({ children }: { children: ReactNode }) => (
    <>
        {children}
    </>);

const customRender = (ui, options?) => render(ui,
    {
        wrapper: TestWrapper,
        ...options,
    });

// re-export everything
export * from "@testing-library/react";

// override render method
export {
    customRender as render,
};
