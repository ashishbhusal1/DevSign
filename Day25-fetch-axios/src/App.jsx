import React from "react";
import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  // let [Product, setProduct] = useState({});
  let [Products, setProducts] = useState({});
  let [Requesting, setRequesting] = useState(true);
  // const GetSingleProduct = async () => {
  //   try {
  //     const response = await axios.get("https://dummyjson.com/products/5");
  //     setProduct(response.data);
  //     console.log(response.data);
  //     setRequesting(false);
  //   } catch (error) {
  //     console.error(error);
  //   }

  // };
  const GetAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );
      setProducts(response.data.products);
      setRequesting(false);
    } catch (error) {
      console.error(error);
      setRequesting(false);
    }
  };
  //code to run while component mounted
  // useEffect(() => {
  //   GetSingleProduct();
  // }, []);
  useEffect(() => {
    GetAllProducts();
  }, []);
  if (Requesting) {
    return <h1>Loading...</h1>;
  }
  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  // {Requesting ? <h1>Loading...</h1> : <Card item={Product} />}
  // {Product.hasOwnProperty('title') ? <h1>Loading..</h1>: <Card item={Product} />}
  return (
    <>
      {Products.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </>
  );
}

export default App;
