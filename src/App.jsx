import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { calCulateTotals, getCartItems } from "./feature/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calCulateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CardContainer />
    </main>
  );
}

export default App;
