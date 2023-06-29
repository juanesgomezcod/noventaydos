import React from "react"
import Logo from "../../images/Logo.jpg";

export const ProductsList = () => {
    return (
        <>
        <h1 class="title">PRODUCTOS</h1>
        <div className="products">
            <div class="product">
            <a href="#">
            <div class="product__img">
                <img src="{Logo}" alt="logo"/>
            </div>
            </a>
            <div class="product__footer">
                <h1>Title</h1>
                <p>Categoria</p>
                <p class="price">$60.000</p>
            </div>
            <div class="button">
                <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>

            </div>
            </div>
        </div>
        </>
    )
}