import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  // const products = [
  //     {
  //       name: "Macbook Pro ",
  //       id: 1,
  //       price: 30,
  //     },
  //     {
  //       name: "Keybord ",
  //       id: 2,
  //       price: 40,
  //     },
  //     {
  //       name: "Mouse ",
  //       id: 3,
  //       price: 50,
  //     },
  //   ];

   

  useEffect(() => {
    productList();
    }, []);

  const productList = () => {
    axios.get('https://dummyjson.com/products').then((res) => {
         const allProduct = (res.data.products)

         setProducts(allProduct);         
      
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>ProductList</h1>
      {products.map((item, index) => (
        <div key={index}>
        <div className="products-container">
          <Product  item={item}  isFromList ={true}/>
             
        </div> 
        </div>
      ))}
    </div>
  );
}

export default ProductList;
