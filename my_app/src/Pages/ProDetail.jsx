import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProDetail(){
    // useParams() 란?
    // URL 의 http://localHost:5317/detail/1 의 1을 받아오는 함수이다
    // 형식 : const {받아올 파라미터 값} = useParams()
    const {id} = useParams()
    return(
        <>
        <h1>상품의 상세 페이지</h1>
        <p>상품의 ID 는 <strong>{id}</strong> 입니다.</p>
        <Link to='/'>상품 목록으로 이동</Link>
        </>
    )
}