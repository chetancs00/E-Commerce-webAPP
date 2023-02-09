import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../../redux/slices/cartSlice";
import { amountNumberFormatting } from "../../../utils/common";
import AppBase from "../../Base/AppBase";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let total = 0;
  let itemQuantity = {};
  cart?.forEach((item, index) => {
    total += item.productPrice * item.quantity;
    itemQuantity[item.productId] = item.quantity;
  });


  const handleRemoveFromCart = (productId) => {
    if (itemQuantity[productId] > 1) {
      dispatch(decreaseItem({ productId: productId }));
      itemQuantity[productId] -= 1;
    } else {
      dispatch(removeItem({ productId: productId }));
      delete itemQuantity[productId];
    }
  };

  const handleIncreaseItem = (productId) => {
    dispatch(increaseItem({ productId: productId }));
  };

  return (
    <AppBase>
      <div className="container">
        <h3 className="mb-3">Shopping Cart</h3>
        <div className="row">
          {cart?.map((item) => (
            <div className="col-4 mb-3">
              <img
                src={
                  item && item.productImage && item.productImage[0]
                    ? item.productImage[0].url
                    : "default-image.jpg"
                }
                className="img-thumbnail"
                style={{ height: "90px" }}
              />
              <p className="mt-3">{item.productName}</p>
              <p>₹{amountNumberFormatting(item.productPrice)}</p>
              <div className="d-flex">
                <button
                  style={{
                    position: "relative",
                    left: "-30px",
                    borderRadius: "20px",
                    height: "35px",
                  }}
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(item.productId)}
                >
                  -
                </button>
                <p style={{ position: "relative", left: "-19px" }}>
                  Quantity: {item.quantity}
                </p>
                <button
                  style={{
                    position: "relative",
                    left: "19px",
                    borderRadius: "20px",
                    height: "35px",
                  }}
                  className="btn btn-primary"
                  onClick={() => handleIncreaseItem(item.productId)}
                >
                  +
                </button>
              </div>
              <p>
                Total Price: ₹
                {amountNumberFormatting(item.productPrice * item.quantity)}
              </p>
            </div>
          ))}
        </div>
        <h3>Cart Total ₹{amountNumberFormatting(total)}</h3>
      </div>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </AppBase>
  );
};

export default Cart;
