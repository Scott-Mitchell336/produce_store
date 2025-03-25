//
// CartItem.jsx
// Created by Scott Mitchell on 03/21/2025
// Block 27A - Simple Produce Store
//

import { useState } from "react";

function CartItem({ item, removeItemFromCart }) {
  const itemTotal = item.price * item.quantity;

  function handleClick() {
    // Implement the function to remove an item from the cart
    removeItemFromCart(item);
  }

  return (
    <li className="cart_list_item">
      {item.name} - ${item.price.toFixed(2)} x {item.quantity} = $
      {itemTotal.toFixed(2)} <button onClick={handleClick}>X</button>
    </li>
  );
}

export default CartItem;
