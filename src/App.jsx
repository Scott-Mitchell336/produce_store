import { useState } from "react";
import "./App.css";
import ProduceList from "./components/ProduceList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <h2>Simple Produce Store</h2>

      <ProduceList />
      <h3>Shopping Cart:</h3>
      <ShoppingCart />
      <p>Total: $xxx.xx</p>
    </>
  );
}

export default App;
