import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { star_rating } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContextProvider";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-img" alt="" />
        {!cartItem[id] ? (        
          <div className="counter">
            <img
              onClick={() => addToCart(id)}
              className="icon"
              src="plus icon.png"
              alt=""
            />
          </div>
        ) : (
          <div className="counter">
            <img
              onClick={() => removeFromCart(id)}
              className="icon subtract"
              src="red minus icon.png"
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              className="icon add"
              src="green plus icon.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={star_rating[0]} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price}đ</p>
      </div>
    </div>
  );
};

export default FoodItem;
