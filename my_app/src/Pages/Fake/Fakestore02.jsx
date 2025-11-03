import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../Fake/ProductApp.css'

// 구조 분해 할당 : 일일히 변수로 대입해서 할당을 다시한다
// 반드시 구조 분해 할당은 중괄호{data}로
export default function Fakestore02({data}){
    const [loading, setLoading] = useState(true)
    // 카테고리별로 담을 변수
    const [all, setAll] = useState([])
    // rating 보이기/안보이기 
    const [rateshow,setRateShow] = useState(false)

    // 전체
    const showAll = () => {
        setData(all)
    }

    // 카테고리 필터
    const filterLIst = (category) => {
        const filte = all.filter((item) => item.category === category)
        setData(filte)
    }
    // // 카테고리 다른 방법
    // const filterLIst02 = (num) => {
    //     if(num === 1){
    //         tabList("jewelery")
    //     }else if(num === 2){
    //         tabList("electronics")
    //     }else if(num === 3){
    //         tabList("men's clothing")
    //     }else if(num === 4){
    //         tabList("women's clothing")
    //     }
    // }
    // // ┖> <button type="button" onClick={() => filterLIst02(1)}>jewelery</button>
    // // ┖> <button type="button" onClick={() => filterLIst02(2)}>jewelery</button>
    // // 이런 식으로 작성할 수 있음!
    
    return(
        <>
        <button type="button" onClick={showAll}>전체</button>
        {/* <button type="button" onClick={rateTab}>순위</button> */}
        <br/>
        <br/>
        <span>카테고리 </span>
        <button type="button" onClick={() => filterLIst("jewelery")}>jewelery</button>
        <button type="button" onClick={() => filterLIst("electronics")}>electronics</button>
        <button type="button" onClick={() => filterLIst("men's clothing")}>men's clothing</button>
        <button type="button" onClick={() => filterLIst("women's clothing")}>women's clothing</button>
        <ul>
            {(rateshow ? rateTab : data).map((data) => (
                <li key={data.id}>
                    <img 
                    src={data.image} 
                    alt={data.title} />
                    <Link to={`/detail/${data.id}`}>
                    <p>{data.title}</p>
                    </Link>
                    <p style={{color: '#777'}}>{data.category}</p>
                    <p>{data.price}$ / ★{data.rating.rate} / 후기 {data.rating.count}</p>
                </li>
            ))}
        </ul>
        </>
    )
}