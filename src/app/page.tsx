'use client'
import React from "react";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Button } from "./components/Button/Button";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

// if export is default, the component is exported without curly brackets.



export const AppContext = React.createContext<any>(undefined);

export default function Home() {
  let [state, setState] = React.useState(0);

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ state, setState }}>
        <Header />
        <div className="container">
          <AboutUs />
          <ShoppingCart />
          <Button />
          <Button />
          <Button />
        </div>
      </AppContext.Provider>
    </div>
  );
}
