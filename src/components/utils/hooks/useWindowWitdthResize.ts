// "use client"
import React from "react";

// const theWindow = window


export const useWindowWitdthResize = (): number => {

    const [width, setWidth] = React.useState<number>(0);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width

    
}

export const useIsWindowBigger = (width: number): boolean => {
    let windowWidth = useWindowWitdthResize();

    if (windowWidth >= width) {
        return true;
    }
    return false;
}