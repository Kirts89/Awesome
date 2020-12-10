import {Nav, Navbar} from "react-bootstrap";
import logo from "./logo.svg";
import s from './TopNavbar.module.sass';
import React from "react";

function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className={s.navbar}>
      <Navbar.Brand href="#home">
        <img src={logo} className={s.logo} alt="logo"/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Главная</Nav.Link>
        <Nav.Link href="#features">Вся продукция</Nav.Link>
        <Nav.Link href="#pricing">Контакты</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default TopNavbar;