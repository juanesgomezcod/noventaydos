import React from "react"
import Logo from "../../images/Logo.jpg";

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <a href="#">
                <div className="logo">
                    <img src={Logo} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">CATALOGO</a>
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