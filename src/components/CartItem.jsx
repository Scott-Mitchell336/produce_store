import { useState } from "react";

function CartItem({ item }) {
  const [cartItem, setCartItem] = useState(item);
  const [quantity, setQuantity] = useState(1);

  return <p>CartItem</p>;
}

export default CartItem;
