import React, {useContext} from "react";
import { DataContext } from "../../context/DataProvider"
import { ProductItem } from "./ProductItem"


export const ProductsList = () => {
  return (

  const value = useContext(DataContext)
  const [Products] = value.Products


    <>
      <h1 class="title">CATALOGO</h1>
      <div className="products">
        <ProductItem />
      </div> 
      </>
  );
};
