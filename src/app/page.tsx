"use client"
import styles from "./page.module.scss";
import "./globals.scss";
import { CardList } from "../components/CardList/CardList";
import { DynamicPlaceholderBlur } from "@/components/DynamicPlaceholderBlur/DynamicPlaceholderBlur";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MapProductCards } from "@/components/ProductCard/MapProductCards";


// import Sceleton from "./loading";
// import Sceleton from "./loading";

// decide what the sidebar should look like on pages other than the home page, and whether it should be anywhere other than the home page.
export default function Home() {


  return (
    <div className="wrapper">
      <Sidebar />
      <CardList>
        <MapProductCards />
      </CardList>
    </div>
  );
}