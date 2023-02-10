import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PRODUCTS } from "../../../constants/api";
import Loader from "../../../constants/Loader";
import { getAPI } from "../../../utils/apiRequests";
import { amountNumberFormatting } from "../../../utils/common";
import AppBase from "../../Base/AppBase";
import {  CartCheck } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addItem,
  removeItem,
  decreaseItem,
  increaseItem,
} from "../../../redux/slices/cartSlice";

const ProductPage = (props) => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(null);
  const cart = useSelector((state) => state.cart.items);
  let itemInCart;
  const [itemQuantity, setItemQuantity] = useState(
    itemInCart ? itemInCart.quantity : 0
  );

  useEffect(() => {
    setProductId(location.state?.productId);
    getProductDetails(productId);
  }, [location,productId]);

  useEffect(() => {
    itemInCart = cart.find((item) => item.productId === productId);
    setItemQuantity(itemInCart ? itemInCart.quantity : 0);
  }, [cart, productId]);

  const getProductDetails = async (productId) => {
    setLoading(true);
    let apiParams = {
      id: location.state.productId,
      pagination: false,
    };
    let successFn = (res) => {
      setLoading(false);
      setProduct(res);
    };
    let errorFn = (error) => {
      console.log(error);
      setLoading(false);
    };
    await getAPI(PRODUCTS, successFn, errorFn, apiParams);
  };

  const dispatch = useDispatch();
  const notify = () => toast("Item Added to Cart!");

  const handleAddToCart = () => {
    notify()
    if (itemQuantity === 0) {
      setItemQuantity(itemQuantity + 1);
      dispatch(
        addItem({
          quantity: itemQuantity + 1,
          productId: productId,
          productName: product.name,
          productPrice: product.price,
          productImage: product.image,
        })
      );
    } else {
      setItemQuantity(itemQuantity + 1);
      dispatch(
        increaseItem({
          quantity: itemQuantity + 1,
          productId: productId,
          productImage: product.image,
        })
      );
    }
  };

  const handleRemoveFromCart = () => {
    if (itemQuantity >= 1) {
      dispatch(decreaseItem({ productId: productId }));
      setItemQuantity(itemQuantity - 1);
    } else {
      dispatch(removeItem({ productId: productId }));
    }
  };

  const handleIncreaseQuantity = (productId) => {
    notify()
    if (itemQuantity === 0) {
      setItemQuantity(itemQuantity + 1);
      dispatch(
        addItem({
          quantity: itemQuantity + 1,
          productId: productId,
          productName: product.name,
          productPrice: product.price,
        })
      );
    } else {
      setItemQuantity(itemQuantity + 1);
      dispatch(
        increaseItem({
          quantity: itemQuantity + 1,
          productId: productId,
        })
      );
    }
  };

  return (
    <AppBase>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {!loading ? (
        <div className="container row ">
          <div className="col">
            {product?.image?.map((img) => (
              <img
                src={img?.url}
                style={{ height: 344, width: "555px", margin: "auto" }}
                alt={product?.name}
                key={img?.id}
              />
            ))}
          </div>
          <div className="col d-flex flex-column p-4">
            <h3 className="text-primary">{product?.name}</h3>
            <p>{product?.description}</p>
            <h4 className="text-primary mr-3">
              ₹{amountNumberFormatting(product?.price)}
            </h4>
            <div className="d-flex align-items-center">
              <div style={{ display: "block" }}>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={handleRemoveFromCart}
                    disabled={itemQuantity === 0}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={itemQuantity}
                    className="form-control mx-2"
                    disabled
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => handleIncreaseQuantity(productId)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center ">
              <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
                <CartCheck size={20} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </AppBase>
  );
};

export default ProductPage;
