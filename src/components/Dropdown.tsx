import React from "react";
import { Link } from "react-router-dom";

// @ts-ignore
const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 font:montserrat text-center items-center bg-indigo-500' : 'hidden'}
            onClick={toggle}
        >
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/about">About</Link>
            <Link className="p-4" to="/portfolio">Portfolio</Link>
            <Link className="p-4" to="/contact">Contact</Link>
        </div>
    );
}
export default Dropdown