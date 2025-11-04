import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import '../Detail/Detail.css'

export default function Detail({data}){
    const {id} = useParams()

    const item = data.find((data) => data.id === Number(id))

    return(
        <div className="Detail">
            <h2>레시피 상세</h2>
            <div>
                <img src={item.image} alt={item.name} />
                <div className="detail">
                    <h2>{item.name}</h2>
                    <h4>요리 유형 : {item.cuisine}</h4>
                    <h4>난이도 : {item.difficulty}</h4>
                    <h4>서빙 수 : {item.servings}</h4>
                    <h4>칼로리 : {item.caloriesPerServing}kcal</h4>
                    <h4>평점 : {item.rating}</h4>

                    <div className="detail_cook">
                        <h3>재료</h3>
                        <p>{item.ingredients}</p>
                        <h3>조리 방법</h3>
                        <p>{item.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}