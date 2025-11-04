import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../ReviewCount/ReviewCount.css'

export default function ReviewCount({data}){
    const reviewCountTab = data.sort((a,b) => b.reviewCount - a.reviewCount)

    return(
        <>
        <div className="ReviewCount">
            <p>상품 {data.length}개</p>
            <div className="ReviewCount_all">
                <ul>
                    {reviewCountTab.map((item) => (
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
        </>
    )
}