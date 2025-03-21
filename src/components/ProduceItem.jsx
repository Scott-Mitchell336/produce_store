import { useState } from "react";

function ProduceItem({ item }) {
  const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <p>
      {item.name} - {formattedPrice}
    </p>
  );
}

export default ProduceItem;
