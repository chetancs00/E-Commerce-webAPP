import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../../constants/api";
import Loader from "../../../constants/Loader";
import { getAPI } from "../../../utils/apiRequests";
import AppBase from "../../Base/AppBase";
import ProductCard from "../CardComponent/ProductCard";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    let apiParams = {
      // pagination: false,
    };
    let successFn = (res) => {
      setLoading(false);
      setProducts(res);
    };
    let errorFn = (error) => {
      console.log(error);
      setLoading(false);
    };
    getAPI(PRODUCTS, successFn, errorFn, apiParams);
  };
  return (
    <AppBase>
      {loading ? (
        <Loader />
      ) : (
        <div className="container" style={{ marginTop: "55px" }}>
          <div className="row">
          {products.map((product, index) => (
        <AnimatedProduct key={product.id} product={product} index={index} />
      ))}
          </div>
        </div>
      )}
    </AppBase>
  );
};

const AnimatedProduct = ({ product, index }) => {
  return (
    <motion.div
    className="col-sm-8 col-md-4"
    key={product.id}
    initial={{ y: 100, scale: 0.5 }}
    animate={{ y: 0, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    > 
      <ProductCard
        productTitle={product.product_name ? product.product_name.slice(0, 45) : ""}
        productImage={product.product_image}
        productId={product._id}
        productPrice={product.product_price}
      />
    </motion.div>
  );
};


export default Home;
