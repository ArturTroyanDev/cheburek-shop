import React from "react";
import { Header } from "./components/Header/Header";
import { TypeProvider } from '@/context/ContextValue';
import { ProductCard } from "./components/ProductCard/ProductCard";
import { CardList } from "./components/CardList/CardList";
import { Sidebar } from "./components/Sidebar/Sidebar";


// if export is default, the component is exported without curly brackets.



export default function Home() {

  return (
    <TypeProvider>
      <div className="wrapper">
        
        <Header />
        <Sidebar />
        
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
