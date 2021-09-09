import React from "react";

import { Button } from "./index";
import { render } from "../../Utils/TestCustomRender";

describe("<Button />", () => {
    let testProps;

    beforeEach(() => {
        testProps = {
            "data-testid": "testButton",
            className: undefined,
        };
    });

    it("should render children correctly", () => {
        const { queryByText } = render(<Button {...testProps}>Test button</Button>);
        expect(queryByText("Test button")).toBeInTheDocument();
    });

    it("should set className when className prop is set", () => {
        testProps.className = "bg-red-500";
        const { queryByTestId } = render(<Button {...testProps}>Test button</Button>);
        expect(queryByTestId("testButton")).toHaveClass(testProps.className);
    });
});
