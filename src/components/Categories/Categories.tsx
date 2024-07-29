"use client" 
import React from 'react'
import styles from "./Categories.module.scss"
import Image from "next/image"
import icon0 from "../../../public/categoryIcons/cheburek.svg"
import icon1 from "../../../public/categoryIcons/doughnut.svg"
import icon2 from "../../../public/categoryIcons/potatoes.svg"
import icon3 from "../../../public/categoryIcons/coffee.svg"
import icon4 from "../../../public/categoryIcons/cocoa.svg"
import classNames from 'classnames';
import { productDataClient } from '../utils/dataReceiver/ProductDataClient'
import { useContextValue } from '@/context/ContextValue'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../utils/redux/store'
import { setSidebarFlag } from '../utils/redux/slices/flagSlice'
// import { getStaticProps, getImageUrl } from "../utils/dataReceiver/productData";


type Props = {
    id: number, //or categoryId
    onClickCategory: any,
}

// return the blurDataUrl////////////////////////////////////////////////////////////////////////////

export function Categories({ id, onClickCategory }: Props) {
    const dispatch = useDispatch()
    const handleChange = (flag: boolean) => {
        dispatch(setSidebarFlag(flag))
    }
    // productDataClient(id)
    // console.log(data)

    // getStaticProps(1);

    const categoriesNames = ['Чебуреки', 'Пончики', 'Картопля', 'Кава', 'Какао',]
    const categoriesIconsArr = [icon0, icon1, icon2, icon3, icon4] // temporary option
    // console.log(id)

    let stylesItemActive = classNames(styles.item, styles.itemActive);

    return (
        <ul className={styles.categoriesContainer}>
                {categoriesNames.map((categoryName, index) => (
                    <li
                    key={index}
                    onClick={() => {
                        onClickCategory(index) 
                        handleChange(false)
                    }}
                    className={id === index ? stylesItemActive : styles.item}
                    >
                        <Image src={categoriesIconsArr[index]} alt="cheburek" />
                        <span className={styles.title}>{categoryName}</span>
                    </li>
                ))}
            </ul>
    )
}











// const [activeIndex, setActiveIndex] = React.useState(0);

// const onClickCategory = (index: number) => {
//     setActiveIndex(index);
// };

// let stylesItem = classNames(styles.item);

// const Menus = [
    //     { title: "Bus", icon: "../../../public/categoryIcons/cheburek.svg", width: 30, height: 30 },
    //     { title: "Route", icon: "/routeIcon.svg", width: 30, height: 30 },
    //     { title: "Schedule", icon: "/scheduleIcon.svg", width: 30, height: 30 },
    //     { title: "Booking", icon: "/bookingIcon.svg", width: 30, height: 30 },
    //     { title: "Ticketing", icon: "/ticketingIcon.svg", width: 30, height: 30 },
    //     { title: "Check-in", icon: "/check-inIcon.svg", width: 30, height: 30 },
    //     { title: "Departure", icon: "/departureIcon.svg", width: 30, height: 30 },
    //     { title: "Tracking", icon: "/trackingIcon.svg", width: 30, height: 30 },
    //     { title: "Finance", icon: "/financeIcon.svg", width: 30, height: 30 },
    //     { title: "Reports", icon: "/reportsIcon.svg", width: 30, height: 30 },
    //     { title: "Manage User", icon: "/manageUserIcon.svg", width: 30, height: 30 },
    //     { title: "Help", icon: "/helpIcon.svg", width: 30, height: 30 },
    //     { title: "Logout", icon: "/logoutIcon.svg", width: 30, height: 30 },
    //   ] 
    //   console.log(Menus[0].icon)