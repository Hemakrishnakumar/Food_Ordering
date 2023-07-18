import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import { useState } from "react";
import Cart from "./components/Layout/Cart.js";
import CartProvider from "./components/store/CartProvider.js";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <CartProvider>
      {displayModal && <Cart onClose={() => setDisplayModal(false)} />}
      <Header onSubmit={() => setDisplayModal(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;
