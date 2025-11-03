import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props){
    return(
        <>
        <ul>
            {props.data.slice(0, 20).map((data) =>(
                <li key={data.id}>
                    <ProductItem data = {data} />
                </li>
            ))}
        </ul>
        </>
    )
}