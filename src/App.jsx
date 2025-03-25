import { useState } from "react";
import "./App.css";
import ProduceList from "./components/ProduceList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function addToCart(item) {
    // console.log("addToCart() - item = ", item);
    setCart((currentCart) => {
      console.log("Current cart:", currentCart);

      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );
      console.log("Existing item found:", existingItem);

      const updatedCart = existingItem
        ? currentCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...currentCart, { ...item, quantity: 1 }];

      // console.log("addToCart() - cartItem = ", cartItem);
      // Calculate new total after cart update
      const newTotal = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
        0
      );
      console.log("New total:", newTotal);

      setCartTotal(newTotal);
      return updatedCart;
    });
  }

  return (
    <>
      <h2 className="page_title">Simple Produce Store</h2>
      {console.log("App - cart = ", cart)}
      {console.log("App - addToCart = ", addToCart)}

      <ProduceList cart={cart} addToCart={addToCart} />
      <h3 className="shopping_cart_title">Shopping Cart:</h3>
      <ShoppingCart cart={cart} setCart={setCart} />
      <p className="shopping_cart_total">Total: ${cartTotal.toFixed(2)}</p>
    </>
  );
}

export default App;
