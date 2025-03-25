import { useState } from "react";

function CartItem({ item }) {
  // Remove local state since we want to use the props directly
  const itemTotal = item.price * item.quantity;

  return (
    <li className="cart_list_item">
      {item.name} - ${item.price.toFixed(2)} x {item.quantity} = $
      {itemTotal.toFixed(2)}
    </li>
  );
}

export default CartItem;
