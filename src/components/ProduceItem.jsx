import { useState } from "react";

function ProduceItem({ item, cart, addToCart }) {
  // Add console.log at the start to debug props
  console.log("ProduceItem props:", { item, cart, addToCart });

  const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleClick() {
    if (typeof addToCart !== "function") {
      console.error("addToCart is not a function:", addToCart);
      return;
    }
    addToCart(item);
  }

  return (
    <li className="produce_list_item">
      {item.name} - {formattedPrice} <button onClick={handleClick}>+</button>
    </li>
  );
}

export default ProduceItem;
