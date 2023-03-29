import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa";
import {NavLink, Outlet} from "react-router-dom";


const Header = () => {
  return (
    <>
    <header className="header">
        <div className="logo">
            <NavLink to="/">GoalSetter</NavLink>
        </div>
        <ul>
            <li>
                <NavLink to="login">
                    <FaSignInAlt /> Login
                </NavLink>
            </li>
            <li>
                <NavLink to="register">
                    <FaSignOutAlt /> Register
                </NavLink>
            </li>
        </ul>
    </header>

    <main>
        <Outlet />
    </main>
    </>
  )
}

export default Header