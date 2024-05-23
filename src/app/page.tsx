import React from "react";
import { Header } from "./components/Header/Header";
import { TypeProvider } from '@/context/ContextValue';
import { ProductCard } from "./components/ProductCard/ProductCard";
import { CardList } from "./components/CardList/CardList";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { productCardImages } from "./../app/components/assets/productCardData/productCardImageArray"

console.log(productCardImages)

export default function Home() {

  return (
    <TypeProvider>
      <div className="wrapper">

        <Header />
        <Sidebar />

        <div className="container">
          <CardList>
            {
              productCardImages.map((obj, index) => <ProductCard key={index} image={obj.image} title={obj.title} price={obj.price} />)
            }
          </CardList>
        </div>
      </div>
    </TypeProvider>
  );
}
