"use client"
import React, { useEffect } from "react"
import { productDataClient } from "../utils/dataReceiver/ProductDataClient";
import { ProductCard } from "./ProductCard";


// data.map((obj: any) => <ProductCard id={obj.id} key={obj.id} title={obj.attributes.title} price={obj.attributes.price} />)
// child={<DynamicPlaceholderBlur src={"http://localhost:1337" + images[obj]} width={300} height={240} styles={styles.image} alt={obj.attributes.title} />} 
// image={"http://localhost:1337"+ images[obj]}

// const data = productDataClient()
// console.log(data)

// export function mapProductCards() {
//     return (
//         <>
//             something
//         </>
//     )
// }

type Props = {
    arr1: any,
    arr2: any,
}

export function MapProductCards() {
    const data = productDataClient();



    return (
        <>
            {data.map((obj: any) => <ProductCard id={obj.id} key={obj.id} title={obj.title} price={obj.price} src={"http://localhost:1337" + obj.imageUrl} width={300} height={240} />)}
        </>
    )
}