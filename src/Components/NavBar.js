import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onChangePage }) {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/our-story">Our Story</NavLink>
            <NavLink to="/shopping-cart">Shopping Cart</NavLink>
        </nav>
    )
}

export default NavBar;