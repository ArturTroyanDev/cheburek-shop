// "use client"
// import React from "react"


// type containerProps = {
//     children: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
// };

// type Context = {
//     ProductPopUpFlag: boolean,
//     setProductPopUpFlag: (flag: boolean) => void
// }

// const ContextState = {
//     ProductPopUpFlag: false,
//     setProductPopUpFlag: () => false,
// }


// export const ContextWrapper = React.createContext<Context>(ContextState)

// export const TypeProvider = (props: containerProps) => {

//     const [ProductPopUpFlag, setProductPopUpFlag] = React.useState<boolean>(false)

//     return (
//         <ContextWrapper.Provider value={{ ProductPopUpFlag, setProductPopUpFlag }}>
//             {props.children}
//         </ContextWrapper.Provider>
//     );

// };

// export function useContextValue() {
//     return React.useContext(ContextWrapper)
// }
