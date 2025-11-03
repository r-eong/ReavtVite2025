import { useEffect, useState } from "react";

import '../ExJ06/ProductApp.css'
import ProductList from "./ProductList";

export default function ProductApp(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setData(data)
            // 방법 2
            // const dataSlice = data.map((product) => ({
            //     id: product.id,
            //     name: product.title, // .slice(0, 10) << 주석처리 한 이유: 내가 뒤에서 이미 씀
            //     price: product.id * 10000,
            //     img: `https://picsum.photos/500?random=${product.id}`
            // }))
            // setData(dataSlice)
        })
        .finally(() => {
            console.log('요청완료')
            setLoading(false)
        })
    }, [])

    return(
        <>
        <h2>상품목록</h2>
        <ProductList data = {data} />
        </>
    )
}