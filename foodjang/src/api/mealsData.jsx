import { useState, useEffect } from "react";

export default function MealsData(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setData(data.recipes)
        })
        .finally(() => {
            console.log('요청완료')
        })
    }, [])

    return data;
}