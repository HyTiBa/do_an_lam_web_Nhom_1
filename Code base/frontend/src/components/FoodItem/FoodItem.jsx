import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { star_rating } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContextProvider";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div class="food-item">
      <div class="food-item-img-container">
        <img src={image} class="food-item-img" alt="" />
        {!cartItem[id] ? (        
          <div class="counter">
            <img
              onClick={() => addToCart(id)}
              class="icon"
              src="plus icon.png"
              alt=""
            />
          </div>
        ) : (
          <div class="counter">
            <img
              onClick={() => removeFromCart(id)}
              class="icon subtract"
              src="red minus icon.png"
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              class="icon add"
              src="green plus icon.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div class="food-item-info">
        <div class="food-item-name-rating">
          <p>{name}</p>
          <img src={star_rating[0]} alt="" />
        </div>
        <p class="food-item-description">{description}</p>
        <p class="food-item-price">{price}đ</p>
      </div>
    </div>
  );
};

export default FoodItem;
