"use client"
import React from "react"
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import axios from "axios"

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

export const ProductDataClient = () => {
    const [items, setItems] = React.useState<ExtractedData[]>([]);
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const currentPage = useSelector((state: RootState) => state.filter.currentPage)
    console.log(currentPage)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/chebureks?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${1}&filters[category]=${categoryId}`);
                // const data: ApiResponse = await response.json();

                const extractedData: ExtractedData[] = response.data.data.map((item: Item) => ({
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
    }, [categoryId, currentPage])

    return items
}


