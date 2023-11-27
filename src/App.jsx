import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { calCulateTotals } from "./feature/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calCulateTotals());
  }, [cartItems]);
  return (
    <main>
      <Modal />
      <Navbar />
      <CardContainer />
    </main>
  );
}

export default App;
