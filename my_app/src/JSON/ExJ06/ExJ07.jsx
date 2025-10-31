import { useState, useEffect } from "react";

export default function ExJ07(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // 카테고리별로 담을 변수
    const [all, setAll] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setData(data)
            setAll(data)
        })
        .finally(() => {
            console.log('요청완료')
            setLoading(false)
        })
    }, [])

    // 전체
    const showAll = () => {
        setData(all)
    }

    // 카테고리 필터
    const filterLIst = (category) => {
        const filte = all.filter((item) => item.category === category)
        setData(filte)
    }
    
    return(
        <>
        <button type="button" onClick={showAll}>전체</button>
        <button type="button">순위</button>
        <br/>
        <br/>
        <h3>카테고리</h3>
        <button type="button" onClick={() => filterLIst("jewelery")}>jewelery</button>
        <button type="button" onClick={() => filterLIst("electronics")}>electronics</button>
        <button type="button" onClick={() => filterLIst("men's clothing")}>men's clothing</button>
        <button type="button" onClick={() => filterLIst("women's clothing")}>women's clothing</button>
        <ul style={{
            listStyle: 'none', 
            padding: 0, 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'flex-start',
            gap: '15px',
            width: '760px'
            }}>
            {data.map((data) => (
                <li 
                key={data.id} 
                style={{width: '200px', 
                    border: '1px solid #ccc', 
                    borderRadius: '10px', 
                    padding: '20px'}}>
                    <img 
                    src={data.image} 
                    alt={data.title} 
                    style={{width: '200px', height: '200px'}}
                     />
                    <p>{(data.title).slice(0, 10)}</p>
                    <p style={{color: '#777'}}>{data.category}</p>
                    <p>{data.price}$ / ★{data.rating.rate} / 후기 {data.rating.count}</p>
                </li>
            ))}
        </ul>
        </>
    )
}