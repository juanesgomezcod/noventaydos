import React from "react"
import Logo from "../../images/Logo.jpg";
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/ProductsList">CATALOGO</Link>
                </li>
                <li>
                    <a href="#">SERVICIOS</a>
                </li>
                <li>
                    <a href="#">CONTACTO</a>
                </li>
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">0</span>
                </div>
            </ul>
        </header>
    )
}