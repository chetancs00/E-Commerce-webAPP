import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../../constants/api";
import Loader from "../../../constants/Loader";
import { getAPI } from "../../../utils/apiRequests";
import AppBase from "../../Base/AppBase";
import ProductCard from "../CardComponent/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true)
    let apiParams = {
      pagination: false,
    };
    let successFn = (res) => {
        setLoading(false)
      setProducts(res);
    };
    let errorFn = (error) => {
      console.log(error);
      setLoading(false)
    };
    getAPI(PRODUCTS, successFn, errorFn, apiParams);
  };
  return (
    <AppBase>
        {loading ? <Loader/> : 
         <div className="container" style={{marginTop : "55px"}}>
         <div className="row" >
         {products.map((product) => (
             <div className="col-md-4" key={product.id} >
           <ProductCard
             productTitle={product.name ? product.name.slice(0, 45) : ""}
             productImage={product.image}
             productId = {product.id}
             productPrice = {product.price}
           />
           </div>
         ))}
       </div>
       </div>}
         
       
    </AppBase>
  );
};

export default Home;
