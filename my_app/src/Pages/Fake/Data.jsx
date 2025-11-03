import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 커스텀 훅 - 훅을 제조해서 만든 훅 useproduct()
// 커스텀 훅 안에 useState, useEffect, fatch 만드로 구성된 함수
export default function useProduct(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setData(data)
        })
        .finally(() => {
            console.log('요청완료')
        })
    }, [])

    // JSON 에서 받아온 data 상태변수를 return 을 이용하여 반환해준다
    return data;
}