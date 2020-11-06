import React, { createContext, useState } from "react";
import airpod from "../assets/airpod.jpg";
import dslr from "../assets/dslr.jpg";
import handwatch from "../assets/handwatch.jpg";
import headphone from "../assets/headphone.jpg";
import iphone from "../assets/iphone.jpg";
import radio from "../assets/radio.jpg";
import shoes from "../assets/shoes.jpg";

export const ProductsContext = createContext({
  products:[],
  toggleCart: () => {}
});
const ProductContextProvider = (props) => {
  console.log(props);
  const [productsList,setProductList] = useState([
    {
      id: 1,
      name: "Airpod",
      price: 9999,
      image: airpod,
      status: "brand new",
    },
    { id: 2, name: "DSLR", price: 29999, image: dslr, status: "brand new" },
    {
      id: 3,
      name: "Handwatch",
      price: 9999,
      image: handwatch,
      status: "hot",
    },
    { id: 4, name: "Headphone", price: 2999, image: headphone, status: "hot" },
    { id: 5, name: "Iphone", price: 19999, image: iphone, status: "new" },
    { id: 6, name: "Murfii", price: 3299, image: radio, status: "hot" },
    { id: 7, name: "Nikee", price: 4599, image: shoes, status: "new" },
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...productsList] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider
