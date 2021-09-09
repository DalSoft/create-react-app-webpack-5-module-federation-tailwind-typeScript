import classnames from "classnames";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
    "data-testid"?: string;
}

const Button = ({ children, className, "data-testid": dataTestId }: Props) => (
    <button type="button" data-testid={dataTestId} className={classnames("p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600", className)}>
        {children}
    </button>);

export { Button };
