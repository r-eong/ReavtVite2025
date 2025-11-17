import { useEffect, useState } from "react";
// 반드시 axios 를 import 해야한다
import axios from 'axios'

export default function Test(){
    const [data, setData] = useState([])

    useEffect(() => {
        // load 라는 비동기 함수를 만들어서 API 요청
        const load = async() => {
            try{
                // axios.get()을 이용해 API 호출한다
                // 공식 : async() ~~~ await axios.get(URL)
                const res = await axios.get('https://dummyjson.com/products?limit=20')
                console.log(res.data)
                setData(res.data.products)
            }catch(error){
                console.log('데이터 호출 실패')
                console.log(error)
            }finally{
                // 로딩이 실패하든 성공하든 무조건 실행
                console.log('요청완료')
            }
        }

        // 반드시 작성한 함수를 호출해야함
        load()
    }, [])

    return(
        <>
        <ul>
            {data.map((dataItem) => (
                <li key={dataItem.id}>
                    {dataItem.title}
                </li>
            ))}
        </ul>
        </>
    )
}