"use client"
import React from 'react'
import styles from "./sidebar.module.scss"
import Image from "next/image"
// import cheburek from "../../../public/categoryIcons/cheburek.svg"

import icon0 from "../../../public/categoryIcons/cheburek.svg"
import icon1 from "../../../public/categoryIcons/doughnut.svg"
import icon2 from "../../../public/categoryIcons/potatoes.svg"
import icon3 from "../../../public/categoryIcons/coffee.svg"
import icon4 from "../../../public/categoryIcons/cocoa.svg"

import classNames from 'classnames';
import { ProductSearch } from "../ProductSearch/ProductSearch"
import { useContextValue } from "../../context/ContextValue";







export function Sidebar() {
    const { sidebarFlag } = useContextValue();

    const isSidebarActive = classNames(styles.sidebar, {
        [styles.active]: sidebarFlag
    });

    const [activeIndex, setActiveIndex] = React.useState(0);
    const categoriesNames = ['Чебуреки', 'Пончики', 'Картопля', 'Кава', 'Какао',]
    const categoriesIconsArr = [icon0, icon1, icon2, icon3, icon4] // temporary option

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



    const onClickCategory = (index: number) => {
        setActiveIndex(index);
    };

    let stylesItem = classNames(styles.item);
    let stylesItemActive = classNames(styles.item, styles.itemActive);


    return (
        <div className={isSidebarActive}>
            <ProductSearch />
            <ul className={styles.categoriesContainer}>
                {categoriesNames.map((value, index) => (
                    <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={activeIndex === index ? stylesItemActive : stylesItem}
                    >
                        <Image src={categoriesIconsArr[index]} alt="cheburek" />
                        <span className={styles.title}>{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )

}