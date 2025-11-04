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

    // 좋아요 버튼
    // 좋아요 출력 방향
    // like = {1: 0, 2: 0, 3: 0 ...}
    // id 음식명 좋아요
    //  1  피자    0
    //  2 파스타   0
    //  3 샐러드   0 ...

    // 좋아요
    // JSON 자체가 오브젝트 배열이기 때문에 아래와 같이 초기화 할 수 없다
    // 이유 : 하나의 항목만 좋아요가 0이 되기 때문
    // 오브젝트에 0을 초기화하는 초기값 변수
    // 각자의 오브게트 안에 좋아요를 새로 그리는 것이기 땜누에 [배열]이 아닌 {오브젝트}로 써야함!
    const defaultLikes = {}  // 이렇게 빈 배열을 만들어주게되면 
    // undfind 가 될 확률이 높기 때문에 예외처리(if)를 해줘야함!
    if(data.length > 0){
        for(let i=0; i<data.length; i++){
            const recip = data[i]
            // defaultLikes[1] = 0
            // {id : 1, .... 좋아요: 0}
            defaultLikes[recip.id] = 0   // 각 레시피 id별로 초기값 0으로 셋팅
        }
    }

    // 꼭 for문 아래에 있어야함!
    const [likes, setLikes] = useState(defaultLikes)
    
    // 좋아요 버튼을 클릭하면 좋아요 1씩 증가하는 핸들러
    const likesHandeler = (id) => {
        // 배열이나 오브젝트는 힙의 어드레스 번지 주소가 같으면 
        // 리렌더링을 하지 않기 때문에 반드시 얕은복사 필요
        const likeCopy = {...likes}
        // 현재 undefind 인 경우 -> undefind + 1 -> NaN 출력
        // ┖> likeCopy[id] += 1
        likeCopy[id] = (likeCopy[id] !== undefined ? likeCopy[id] : 0) + 1
        setLikes(likeCopy)
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
                        <button type="button" onClick={() => likesHandeler(data.id)}>💚 {likes[data.id]}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}