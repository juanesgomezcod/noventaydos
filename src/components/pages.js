import React from "react"
import { Route, Routes } from "react-router-dom"
import { Start } from "./Start"
import { ProductsList } from "./Products/index"

export const Pages = () => {
    return (
        <div>
            <section>
                <Routes>
                    <Route path="/" element={Start} />
                    <Route path="/Products" element={ProductsList} />
                </Routes>
            </section>
        </div>
    )
}