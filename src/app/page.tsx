import React from "react";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Button } from "./components/Button/Button";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { TypeProvider } from '@/context/contextProductsCounter';
import { ProductCard } from "./components/ProductCard/ProductCard";


// if export is default, the component is exported without curly brackets.



export default function Home() {

  return (
    <TypeProvider>
      <div className="wrapper">
        <Header />
        <div className="container">
          <AboutUs />
          <ProductCard/>
          <ShoppingCart />
          <Button />
        </div>
      </div>
    </TypeProvider>
  );
}
