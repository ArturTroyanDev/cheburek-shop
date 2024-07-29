// import { ProductCard } from "@/components/ProductCard/ProductCard"
// import { Asul } from "next/font/google";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// import React from "react"
// import { stringify } from "querystring";





export const getStaticProps = (async (categoryId?: number): Promise<string[]> => {
    // const filter = "1"
    // console.log(categoryId)

    const response = await fetch("http://localhost:1337/api/chebureks?&filters[category]=" + categoryId)
    // http://localhost:1337/api/chebureks?&filters[category]=ponchik
    // http://localhost:1337/api/chebureks?populate=*
    const chebureks = await response.json()
    const res = chebureks.data
    return res
})// fix the  function type

export function getChebureks({
    chebureks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return chebureks
}


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













// fix the  function type

// const data = await getImageUrl()

// data.map((obj: any) => {
//     console.log(obj.attributes.image.data[0].attributes.url)
// })

// export function getCheburekImages({
//     chebureks,
// }: InferGetStaticPropsType<typeof getStaticImages>) {
//     return chebureks
// }


// images.map((obj: any) => {
//   console.log()
//  })
