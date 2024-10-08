"use client"
import { ProductCard } from "./ProductCard";
import { ProductDataClient } from "../utils/dataReceiver/ProductDataClient";
import image from '../../../public/foodPhotos/for_1920px_screens/cheburek1_428x380px.jpg'
// import { React } from "react";


// data.map((obj: any) => <ProductCard id={obj.id} key={obj.id} title={obj.attributes.title} price={obj.attributes.price} />)
// child={<DynamicPlaceholderBlur src={"http://localhost:1337" + images[obj]} width={300} height={240} styles={styles.image} alt={obj.attributes.title} />} 
// image={"http://localhost:1337"+ images[obj]}

export function MapProductCards() {

    const data = ProductDataClient();
    // console.log(data)
    // console.log(data[0].price)

    return (
        <>
            {data.map((obj: any) => <ProductCard id={obj.id} key={obj.id} title={obj.title} price={obj.price} src={"http://localhost:1337" + obj.imageUrl} width={300} height={240} />)}
        </>
    )
}