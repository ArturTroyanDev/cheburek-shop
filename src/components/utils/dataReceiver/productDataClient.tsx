"use client"
import React, { useEffect } from "react"
import { useContextValue } from "@/context/ContextValue"
import { useSelector } from 'react-redux'
import type { RootState } from '../../utils/redux/store'



// export const productDataClient = () => {
//     const [items, setItems] = React.useState<any>([])
//     const { categoryId, setCategoryId } = useContextValue();

//     React.useEffect(() => {
//         fetch("http://localhost:1337/api/chebureks?&filters[category]=" + 2)
//             .then((res) => res.json())
//             .then((arr) => {
//                 // const obj = Object.values(arr)
//                 setItems(arr);
//             })
//     }, [categoryId])

//     return items
// }1

type ImageAttributes = {
    url: string,
    name: string
}

type ImageData = {
    attributes: ImageAttributes,
}

type ItemAttributes = {
    title: string,
    price: number,
    category: string | number,
    image: {
        data: ImageData[];
    },
}

type Item = {
    id: number,
    attributes: ItemAttributes
}

interface ApiResponse {
    data: [
        data: Item
    ],
}

interface ExtractedData {
    id: number,
    title: string,
    price: number,
    category: string | number,
    imageUrl: string,
}

export const productDataClient = () => {
    const [items, setItems] = React.useState<ExtractedData[]>([]);
    // const { categoryId, setCategoryId } = useContextValue();
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/chebureks?populate=*&pagination[page]=${3}&pagination[pageSize]=${1}&filters[category]=${categoryId}`);
                const data: ApiResponse = await response.json();

                const extractedData: ExtractedData[] = data.data.map((item: Item) => ({
                    id: item.id,
                    title: item.attributes.title,
                    price: item.attributes.price,
                    category: item.attributes.category,
                    imageUrl: item.attributes.image.data[0].attributes.url,
                    // imageUrlData: item.attributes.image.data,
                }));

                setItems(extractedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData()
    }, [categoryId])

    return items
}






export const productDataImageClient = () => {
    const [items, setItems] = React.useState<any>([])
    // const { categoryId, setCategoryId } = useContextValue();

    React.useEffect(() => {
        fetch("http://localhost:1337/api/chebureks?populate=*")
            .then((res) => res.json())
            .then((arr) => {
                const obj = Object.values(arr)
                setItems(obj[0]);
            })
    }, [])

    return items
}

// let data = productDataClient()

// data.map((obj) => {
//     console.log(obj)
// })













// (async (categoryId?: number): Promise<string[]> => {
//     // const filter = "1"
//     // console.log(categoryId)

//     const response = await fetch("http://localhost:1337/api/chebureks?&filters[category]=" + categoryId)
//     // http://localhost:1337/api/chebureks?&filters[category]=ponchik
//     // http://localhost:1337/api/chebureks?populate=*
//     const chebureks = await response.json()
//     const res = chebureks.data
//     return res
// })// fix the  function type

// export function getChebureks({
//     chebureks,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//     return chebureks
// }


// export const getImageUrl = (async (): Promise<[]> => {
//     const response = await fetch("http://localhost:1337/api/chebureks?populate=*")
//     const chebureks = await response.json()
//     const data = chebureks.data
//     const arr: any = [];

//     data.map((obj: any) => {
//         arr.push(obj.attributes.image.data[0].attributes.url)
//     })

//     // console.log(arr)
//     return arr

// })










