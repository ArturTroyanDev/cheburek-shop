"use client"
import CartItem from '../../components/CartItem/CartItem'
import { ProductDataClient } from "../utils/dataReceiver/ProductDataClient";
import image from '../../../public/foodPhotos/for_1920px_screens/cheburek1_428x380px.jpg'
// import { React } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { RootState } from '../utils/redux/store'



// data.map((obj: any) => <ProductCard id={obj.id} key={obj.id} title={obj.attributes.title} price={obj.attributes.price} />)
// child={<DynamicPlaceholderBlur src={"http://localhost:1337" + images[obj]} width={300} height={240} styles={styles.image} alt={obj.attributes.title} />} 
// image={"http://localhost:1337"+ images[obj]}

export function MapCartItems() {
    const { items } = useAppSelector((state) => state.shoppingCart)

    return (
        <>
            {items.map((item: any) => <CartItem key={item.id} {...item} width={300} height={240}/>)}
        </>
    )
}
// src={"http://localhost:1337" + item.imageUrl}
// export default function CartItem({ title, price, id, src, alt, width, height }: Props) {
