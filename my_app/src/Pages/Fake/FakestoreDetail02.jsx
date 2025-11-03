import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FakestoreDetail02({data}){
    const {id} = useParams()
    // const [product, setProduct] = useState(null)

    // useParams() 로 받아온 id 가 props 받은 
    // data 같은 id 가 존재하는지 찾아야 한다
    const product = data.find((data) => data.id === Number(id))
    
    // 리액트에서의 코드 표현 방식
    // ! = Not = 부정
    // !product === !== null 와 같은 뜻
    if(!product) return <p>데이터 불러오는 중...</p>

    return(
        <>
        {product !== null && product !== undefined ? (
            <div style={{textAlign: 'center', width: '400px'}}>
                <h3>상품 상세보기</h3>
                <p>{product.title}</p>
                <img src={product.image} alt={product.title} style={{width: '200px'}}/>
                    <p>카테고리 : {product.category}</p>
                    <p>가격 : {product.price}</p>
                    <p>평점 : {product.rating.rate}</p>
                    <p>{product.description}</p>
                <Link to='/' >상품목록으로 이동</Link>
            </div>) : null
        }
        </>
    )
}