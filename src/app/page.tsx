import React from "react";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Button } from "./components/Button/Button";
// import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { TypeProvider } from '@/context/contextProductsCounter';
import { ProductCard } from "./components/ProductCard/ProductCard";
import { CardList } from "./components/CardList/CardList";


// if export is default, the component is exported without curly brackets.



export default function Home() {

  return (
    <TypeProvider>
      <div className="wrapper">
        <Header />
        <div className="container">
          <CardList>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </CardList>
        </div>
      </div>
    </TypeProvider>
  );
}
