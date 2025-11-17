import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart, resetCart } from "./CartSlice";
// import cartReduser from './CartSlice'

export default function Cart(){
    const items = useSelector((state) => state.cart.items)

    // 데이터 내보내기
    const dispatch = useDispatch()

    const sampleProducts = [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 1500 },
        { id: 3, name: '오렌지', price: 1200 },
    ]

    return(
        <>
        <h2>장바구니</h2>
        <h4>상품 목록</h4>
        <ul>
            {sampleProducts.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.price}원
                    <button type="button" onClick={() => dispatch(addCart(item))}>장바구니 추가</button>
                </li>
            ))}
        </ul>
        <h4>장바구니</h4>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.name} - {item.price}
                    <button type="button" onClick={() => dispatch(delCart(item.id))}>삭제</button>
                </li>
            ))}
        </ul>
        <button type="button" onClick={() => dispatch(resetCart())}>장바구니 비우기</button>
        </>
    )
}