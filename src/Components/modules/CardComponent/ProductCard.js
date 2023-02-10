import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { amountNumberFormatting } from "../../../utils/common";

const ProductCard = ({
  productTitle,
  productImage,
  productId,
  productPrice,
}) => {
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    setSelectedId(productId);
  }, [productId]);

  const handleProductSelect = () => {
    // console.log("selectedId", selectedId);
    // console.log("productId", productId);
  };

  return (
    <div className="my-3">
      <div
        className="card"
        style={{ width: "20rem", height: "450px", backgroundColor: "#ADD8E6" }}
      >
        <img src={productImage} className="card-img-top" alt="..." />

        <div className="card-body">
          <div
            style={{
              height: "55px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h5 className="card-title">{productTitle}</h5>
            <h3>₹{amountNumberFormatting(productPrice)}</h3>
          </div>
          <p className="card-text"></p>
          <button
            onClick={handleProductSelect}
            style={{ color: "#5B5B5B", border: "none", borderRadius: "20px" }}
          >
            <Link
              to={`/product/${selectedId}`}
              state={{ productId: selectedId }}
              className="btn"
            >
              View Product
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
