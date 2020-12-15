import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import logo from "./logo.svg";
import s from './TopNavbar.module.sass';


function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className={s.navbar}>
      <Navbar.Brand href="#home">
        <img src={logo} className={s.logo} alt="logo"/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/" className="nav-link">Главная</NavLink>
        <NavLink to="/posts" className="nav-link">Посты</NavLink>
        <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
      </Nav>
    </Navbar>
  )
}

export default TopNavbar;