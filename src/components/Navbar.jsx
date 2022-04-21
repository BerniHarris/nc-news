/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../pics/logo.png";
import profileicon from "../pics/profileicon.png";
import { NavbarData } from "./NavbarData";
import avatar from "../pics/profileicon.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [login, setLogin] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showLogin = () => setLogin(!login);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <div>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to="/Home">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <Link to="#" className="profile">
            <img
              onClick={showLogin}
              src={profileicon}
              className="profileicon"
              height={"40px"}
              alt="icon of a profile using a pigeon sillohette instead of person"
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className={login ? "login-menu active" : "login-menu"}>
          <ul className="login-items" onClick={showLogin}>
            <li className="login-toggle">
              <Link to="#" className="profile">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="login-text">
              <img
                src={avatar}
                height={100}
                className="pigeonprofie"
                alt="pigeons take on basic profile icons"
              />
              <p>You are logged in as:</p>
              <b />
              <p>HAPPYAMY2016</p>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
