import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../feature/modal/modalSlice";
import { clearCart } from "../feature/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const confirmHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={confirmHandler}
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
