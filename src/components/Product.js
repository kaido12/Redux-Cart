import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux/es/exports";

const Product = ({ item, isFromList }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const Remove_Handler = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };

  return (
    <div className="card">
      <img className="image" src={item.images[0]} />
      <h2>{item.title}</h2>
      <h4>Rating: {Math.round((item.rating + Number.EPSILON) * 10) / 10}</h4>
      <h4>Price: {item.price}</h4>
      <button
        onClick={
          isFromList ? () => handleAddToCart(item) : () => Remove_Handler(item)
        }
      >
        {isFromList ? "Add to cart" : "Remove"}
      </button>
    
    </div>
  );
};

export default Product;
