"use client"
import React from "react"


type containerProps = {
    children: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};

type Context = {
    productCount: number,
    setProductCount: (num: number) => void

    sidebarFlag: boolean,
    setSidebarFlag: (flag: boolean) => void

    ProductPopUpFlag: boolean,
    setProductPopUpFlag: (flag: boolean) => void

    // isLoading: boolean,
    // setIsLoading: (flag: boolean) => void

}

const ContextState = {
    productCount: 0,
    setProductCount: () => 0,

    sidebarFlag: false,
    setSidebarFlag: () => false,

    ProductPopUpFlag: false,
    setProductPopUpFlag: () => false,

    // isLoading: true,
    // setIsLoading: () => true

}


export const ContextWrapper = React.createContext<Context>(ContextState)

export const TypeProvider = (props: containerProps) => {

    const [productCount, setProductCount] = React.useState<number>(0)
    const [sidebarFlag, setSidebarFlag] = React.useState<boolean>(false)
    const [ProductPopUpFlag, setProductPopUpFlag] = React.useState<boolean>(false) // not using
    // const [isLoading, setIsLoading] = React.useState<boolean>(true);

    // console.log(ProductPopUpFlag)

    return (
        <ContextWrapper.Provider value={{ productCount, setProductCount, sidebarFlag, setSidebarFlag, ProductPopUpFlag, setProductPopUpFlag }}>
            {props.children}
        </ContextWrapper.Provider>
    );

};

export function useContextValue() {
    return React.useContext(ContextWrapper)
}
