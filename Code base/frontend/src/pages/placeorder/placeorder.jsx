import React, { useContext } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/StoreContextProvider";
const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  
  return (
    <form class="place-order">
      <div class="place-order-left">
        <p class="title">Delivery information</p>

        <div class="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div class="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div class="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" name="" id="" />
      </div>

      <div class="place-order-right">
      <div class="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div class="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div class="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() == 0 ? 0:2}</p>
            </div>
            <hr />
            <div class="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount() == 0? 0: getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
