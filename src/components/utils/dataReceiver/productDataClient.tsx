"use client"
import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../utils/redux/store'
import axios from "axios"
import qs from "qs"
import { useRouter } from 'next/navigation'
import { setFilters } from "../../utils/redux/slices/filterSlice"
import image from '../../../../public/foodPhotos/for_1920px_screens/cheburek1_428x380px.jpg'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"


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

// interface ApiResponse { 
//     data: [
//         data: Item
//     ],
// }

interface ExtractedData {
    id: number,
    title: string,
    price: number,
    category: string | number,
    imageUrl: string,
}

export const ProductDataClient = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)
    const [items, setItems] = React.useState<ExtractedData[]>([]);
    const categoryId = useAppSelector((state) => state.filter.categoryId)
    const currentPage = useAppSelector((state) => state.filter.currentPage)

    const fetchChebureks = () => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/chebureks?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${16}&filters[category]=${categoryId}`);
                // const data: ApiResponse = await response.json();

                const extractedData: ExtractedData[] = response.data.data.map((item: Item) => ({
                    id: item.id,
                    title: item.attributes.title,
                    price: item.attributes.price,
                    category: item.attributes.category,
                    imageUrl: item.attributes.image.data[0].attributes.url || '../../../../public/foodPhotos/for_1920px_screens/cheburek1_428x380px.jpg',
                    // imageUrlData: item.attributes.image.data,
                }));

                setItems(extractedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData()
    }


    // if there was a first render, we check the urls parameters and save them in redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(
                setFilters({
                    ...params
                })
            )
            // isSearch.current = true
        }
    }, []);

    // if there was a first render we need to fetch data
    React.useEffect(() => {
        if (!isSearch.current) {
            fetchChebureks();
        }

        isSearch.current = false;
    }, [categoryId, currentPage])

    // if parameters is changed and first render happend save parameters in redux
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                currentPage
            })

            router.push(`?${queryString}`)
        }

        isMounted.current = true;
    }, [categoryId, currentPage])

    return items
}


