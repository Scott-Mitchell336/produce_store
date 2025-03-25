import { useState } from "react";
import CartItem from "./CartItem";

function ShoppingCart({ cart, setCart }) {
  console.log("ShoppingCart() - cart = ", cart);
  return (
    <ul className="shoppig_cart_list">
      {cart && cart.length > 0 ? (
        cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <li className="cart_list_item">Your cart is empty</li>
      )}
    </ul>
  );
}

export default ShoppingCart;
