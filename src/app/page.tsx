import React from "react";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";

import { Button } from "./components/Button/Button";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ContextWrapper, TypeProvider } from '@/context/contextProductsCounter';


// if export is default, the component is exported without curly brackets.



export default function Home() {

  return (
    <TypeProvider>
      <div className="wrapper">
        <Header />
        <div className="container">

          <AboutUs />
          <ShoppingCart />
          <Button />


        </div>
      </div>
    </TypeProvider>
  );
}
