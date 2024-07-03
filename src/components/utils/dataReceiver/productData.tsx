// import { ProductCard } from "@/components/ProductCard/ProductCard"
// import { Asul } from "next/font/google";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// import React from "react"
// import { stringify } from "querystring";





export const getStaticProps = (async (): Promise<string[]> => {
    const response = await fetch('http://localhost:1337/api/chebureks?populate=*')
    const chebureks = await response.json()
    const res = chebureks.data
    return res
})// fix the  function type

export default function getChebureks({
    chebureks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return chebureks
} 
