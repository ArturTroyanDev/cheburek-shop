"use client"
import { read } from "fs";
import React from "react"


type containerProps = {
    children: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};

type Context = {
    productCount: number, // 111111111111111111
    setProductCount: (num: number) => void 
}

const ContextState = {
    productCount: 0,
    setProductCount: () => 0
}


export const ContextWrapper = React.createContext<Context>(ContextState)

export const TypeProvider = (props: containerProps) => {

    const [productCount, setProductCount] = React.useState<number>(0)

    function handleproductCount(num: number) {
        setProductCount(num)
    }

    // console.log("component: " + productCount)


    return (
        <ContextWrapper.Provider value={{productCount, setProductCount: handleproductCount}}>
            {props.children}
        </ContextWrapper.Provider>
    );

};

export function useContextValue () {
    return React.useContext(ContextWrapper)
}
