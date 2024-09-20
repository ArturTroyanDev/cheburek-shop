"use client"
import styles from "./page.module.scss";
import "./globals.scss";
import { CardList } from "../components/CardList/CardList";
import { DynamicPlaceholderBlur } from "@/components/DynamicPlaceholderBlur/DynamicPlaceholderBlur";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MapProductCards } from "@/components/ProductCard/MapProductCards";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { setCurrentPage } from "../components/utils/redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/utils/redux/store";


// import Sceleton from "./loading";
// import Sceleton from "./loading";

// decide what the sidebar should look like on pages other than the home page, and whether it should be anywhere other than the home page.



// Based on the architecture of the App Router we have these general recommendations for appropriate use of Redux:

// No global stores - Because the Redux store is shared across requests, it should not be defined as a global variable. Instead, the store should be created per request.
// RSCs should not read or write the Redux store - RSCs cannot use hooks or context. They aren't meant to be stateful. Having an RSC read or write values from a global store violates the architecture of the Next.js App Router.
// The store should only contain mutable data - We recommend that you use your Redux sparingly for data intended to be global and mutable.

export default function Home() {
  // const dispath = useDispatch()
  // const currentPage = useSelector((state: RootState) => state.filter.currentPage)


  // const onPageChange = (number: number) => {
    // dispath(setCurrentPage(number))
  // }

  return (
    <div className="wrapper">
      <Sidebar />
      <CardList>
        <MapProductCards />
      </CardList>
    </div>
  );
}