import { useState } from "react";

function ProduceItem({ id, item, cart, addToCart }) {
  console.log("ProduceItem - item = ", item);
  console.log("ProduceItem - cart = ", cart);
  console.log("ProduceItem - addToCart = ", addToCart);

  const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleClick() {
    addToCart(item);
  }

  return (
    <li className="produce_list_item">
      {item.name} - {formattedPrice} <button onClick={handleClick}>+</button>
    </li>
  );
}

export default ProduceItem;
