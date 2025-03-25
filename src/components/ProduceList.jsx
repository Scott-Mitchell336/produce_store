//
// ProduceList.jsx
// Created by Scott Mitchell on 03/21/2025
// Block 27A - Simple Produce Store
//

import produceData from "../produce_data";
import { useState } from "react";
import ProduceItem from "./ProduceItem";

function ProduceList({ cart, addToCart }) {
  // console.log("ProduceList - cart = ", cart);
  // console.log("ProduceList - addToCart = ", addToCart);

  return (
    <ul className="produce_list">
      {produceData.map((item) => (
        <ProduceItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </ul>
  );
}

export default ProduceList;
