import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import '../Home/Home.css'

export default function Home({data}){
    const promtionFilter = data.filter((item) => item.id === 6 || item.id === 9 || item.id === 11)
    console.log(promtionFilter)
    // 추출 결과
    // 0 : {id: 6, name: 'Quinoa Salad with Avocado', ingredients: Array(8), instructions: Array(4), prepTimeMinutes: 20, …}
    // 1 : {id: 9, name: 'Caprese Salad', ingredients: Array(6), instructions: Array(5), prepTimeMinutes: 10, …}
    // 2 : {id: 11, name: 'Chicken Biryani', ingredients: Array(12), instructions: Array(6), prepTimeMinutes: 30, …}
    // length : 3
    
    return(
        <div className="Home">
            <img src="d82788f0cc2efa0fd3a5a6a4f2bc7f75_38225.jpg" alt="이미지" />

            <div className="recommended_products">
                <h1>추천 상품</h1>
                <ul>
                    {promtionFilter.map((item) => (
                    <li key={item.id}>
                        <Link to={`/detail/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                            <p className="name">{item.name}</p>
                            <p>{item.cuisine}</p>
                            <p>★ {item.rating} / 후기 {item.reviewCount}</p>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}