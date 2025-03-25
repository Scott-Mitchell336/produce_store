//
// CartItem.jsx
// Created by Scott Mitchell on 03/21/2025
// Block 27A - Simple Produce Store
//

import { useState } from "react";

function CartItem({ item, removeItemFromCart }) {
  // const itemTotal = item.price * item.quantity;

  const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedTotal = (item.price * item.quantity).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleClick() {
    // Implement the function to remove an item from the cart
    removeItemFromCart(item);
  }

  return (
    <li className="cart_list_item">
      {item.name} - {formattedPrice} x {item.quantity} = {formattedTotal}{" "}
      <button onClick={handleClick}>X</button>
    </li>
  );
}

export default CartItem;
