/* eslint-disable @next/next/no-img-element */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import style from "./navbar.module.css"
import { useDispatch, useSelector } from "react-redux";
const Navbars = ({ classAdd, classHome, classProfil }) => {
  
  return (
    <>
      <header>
        <Navbar className="fixed-top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">Food-Recipe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul className="navbar-nav justify-content-start flex-grow-1 pe-5">
                  <Link href="/">
                    <li className="nav-item ms-5">
                      <a className={classHome} aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link href="/addReciped">
                    <li className="nav-item ms-5">
                      <a className={classAdd} href="#">
                        Add Recipe
                      </a>
                    </li>
                  </Link>
                  <Link href="/profil">
                    <li className="nav-item ms-5">
                      <a className={classProfil} href="#">
                        Profile
                      </a>
                    </li>
                  </Link>
                </ul>
              </Nav>
              <Nav className="ms-auto">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                  <li className="nav-item">
                    <button className={`${style.iconLogin} btn btn-light`}>
                      <img src="/assets/User icon.png" alt="" />
                    </button>
                  </li>
                  <Link href="/login">
                    <li className="nav-item">
                      <a
                        className={`${style.navLink} nav-link`}
                        aria-current="page"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                  </Link>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navbars;
