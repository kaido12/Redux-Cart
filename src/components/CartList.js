import React from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import Product from "./Product";


function CartList() {
  const { prodList } = useSelector((state) => state.cart);

  console.log(prodList);
  const dispatch = useDispatch();

  const totalPrice = (lists) => {
    return lists.reduce((acc, curr) => acc + curr.price, 0);
  };

  
  return (
    <>
      <div>
        <h1>CartList</h1>
        {prodList.map((item) => (
          <>
          <div className="products-container">
            <Product item={item} isFromList ={false}/>            
          </div>
          </>
        ))}
      </div>
      <h2>Total Price: {totalPrice(prodList)}</h2>
    </>
  );
}

export default CartList;
