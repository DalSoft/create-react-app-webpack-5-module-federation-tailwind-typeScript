import React, { useState } from "react";
import classnames from "classnames";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-green-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Example</span>
            </div>
            <div className="block lg:hidden">
                <button
                    type="button"
                    className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
                    onClick={toggleMenu}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={classnames("w-full block flex-grow lg:flex lg:items-center lg:w-auto", !showMenu && "sm:hidden")}>
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
                        Home
                    </a>
                </div>
            </div>
        </nav>
    );
};

export { Navigation };
