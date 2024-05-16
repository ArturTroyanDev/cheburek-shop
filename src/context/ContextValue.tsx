"use client"
import { read } from "fs";
import React from "react"


type containerProps = {
    children: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};

type Context = {
    productCount: number, // 111111111111111111
    setProductCount: (num: number) => void 

    sidebarFlag: boolean,
    setSidebarFlag: (flag: boolean) => void 
}

const ContextState = {
    productCount: 0,
    setProductCount: () => 0,

    sidebarFlag: false,
    setSidebarFlag: () => false
}


export const ContextWrapper = React.createContext<Context>(ContextState)

export const TypeProvider = (props: containerProps) => {

    const [productCount, setProductCount] = React.useState<number>(0)
    const [sidebarFlag, setSidebarFlag] = React.useState<boolean>(false)

    return (
        <ContextWrapper.Provider value={{productCount, setProductCount, sidebarFlag, setSidebarFlag}}>
            {props.children}
        </ContextWrapper.Provider>
    );

};

export function useContextValue () {
    return React.useContext(ContextWrapper)
}
