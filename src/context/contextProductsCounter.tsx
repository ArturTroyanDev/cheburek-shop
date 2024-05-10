"use client"
import React from "react"

type containerProps = {
    children: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};

type ContextType = {
    count: number, // 111111111111111111
    setCount: (num: number) => void 
}

const typeContextState = {
    count: 0,
    setCount: () => 0
}


export const ContextWrapper = React.createContext<ContextType>(typeContextState)

export const TypeProvider = (props: containerProps) => {
    
    const [count, setCount] = React.useState<number>(0)
    
    function handlecount(num: number) {
        setCount(num)
        console.log(num, 'something')
    }

    return (
        <ContextWrapper.Provider value={{count, setCount: handlecount}}>
            {props.children}
        </ContextWrapper.Provider>
    );
};

export function useProductCounter () {
    return React.useContext(ContextWrapper)
}



