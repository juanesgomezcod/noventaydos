import React from "react";
import { Link } from "react-router-dom"

export const Start = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>
            <Link to="/Products">
                <h1>Productos</h1>
            </Link>
        </div>
    )
}