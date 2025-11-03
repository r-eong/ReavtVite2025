import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../Recipes/Recip.css'

export default function RecipeList({data}){
    // All
    const [categoryshowAll, setCategoryshowAll] = useState(false)
    // 평점순
    const [categoryshow, setCategoryshow] = useState(false)
    // 카테고리
    const [list, setList] = useState('American')
    // 좋아요
    const [likes, setLikes] = useState(0)

    // 카테고리 필터
    const tabFilter = data.filter((item) => item.cuisine === list)
    // 이름순 / 전체
    const dataCopy01 = [...data]
    const sortList01 = dataCopy01.sort((a,b) => a.id - b.id)
    // 평점순
    const dataCopy02 = [...data]
    const sortList02 = dataCopy02.sort((a,b) => b.rating - a.rating)

    const filterList = (num) => {
        if(num === 1){
            setList('American')
        }else if(num === 2){
            setList('Asian')
        }else if(num === 3){
            setList('Greek')
        }else if(num === 4){
            setList('Italian')
        }else if(num === 5){
            setList('Indian')
        }else if(num === 6){
            setList('Japanese')
        }else if(num === 7){
            setList('Mediterranean')
        }else if(num === 8){
            setList('Mexican')
        }else if(num === 9){
            setList('Moroccan')
        }else if(num === 10){
            setList('Pakistani')
        }else if(num === 11){
            setList('Smoothie')
        }else if(num === 12){
            setList('Thai')
        }else{
            setList('Turkish')
        }
        setCategoryshow(false)
        setCategoryshowAll(false)
    }

    const addLike = (id) => {
        let likeCopy = [...likes]
        likeCopy[id] += 1
        setLikes(likeCopy)
        console.log(addLike)
    }
    
    return(
        <>
        <div className="list_top">
            <h2>레시피 목록</h2>
            <button type="button" onClick={() => {setCategoryshowAll(true); setCategoryshow(false)}}>All</button>
            <button type="button" onClick={() => {setCategoryshow(true); setCategoryshowAll(false)}}>평점순</button>
            <button type="button" onClick={() => filterList(1)}>American</button>
            <button type="button" onClick={() => filterList(2)}>Asian</button>
            <button type="button" onClick={() => filterList(3)}>Greek</button>
            <button type="button" onClick={() => filterList(4)}>Italian</button>
            <button type="button" onClick={() => filterList(5)}>Indian</button>
            <button type="button" onClick={() => filterList(6)}>Japanese</button>
            <button type="button" onClick={() => filterList(7)}>Mediterranean</button>
            <button type="button" onClick={() => filterList(8)}>Mexican</button>
            <button type="button" onClick={() => filterList(9)}>Moroccan</button>
            <button type="button" onClick={() => filterList(10)}>Pakistani</button>
            <button type="button" onClick={() => filterList(11)}>Smoothie</button>
            <button type="button" onClick={() => filterList(12)}>Thai</button>
            <button type="button" onClick={() => filterList(13)}>Turkish</button>
        </div>
            <ul>
                {(categoryshowAll ? sortList01 : categoryshow ? sortList02 : tabFilter).map((data) => (
                    <li key={data.id}>
                        <Link to={`/detail/${data.id}`}>
                            <img src={data.image} alt={data.name} />
                            <p className="name">{data.name}</p>
                            <p>요리 유형 - {data.cuisine}</p>
                            <p>★ {data.rating} / {data.reviewCount}</p>
                        </Link>
                        <button type="button" onClick={addLike}>💚 0</button>
                    </li>
                ))}
            </ul>
        </>
    )
}