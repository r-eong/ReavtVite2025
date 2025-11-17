import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { delCart, resetCart, plusBtn, minusBtn } from "../Store02/cartSlice";

import './CartPage.css'

export default function CartPage(){
    const items = useSelector((state) => state.cart.items)

    const dispatch = useDispatch()

    // 총
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let totalTemp = 0
        
        for(let i=0; i<items.length; i++){
            totalTemp += items[i].price * items[i].quantity
        }
        setTotal(totalTemp)
    }, [items])

    return(
        <div className="CartPage">
            <h2>Cart</h2>
            <h4 onClick={() => dispatch(resetCart())}>전체삭제</h4>
            <ul>
                {items.length !== 0 ? items.map((item, index) => (
                    <li key={index}>
                        <p onClick={() => dispatch(delCart(item.id))}>✕</p>
                        <img src={item.thumbnail} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price*item.quantity}</p>
                            <div>
                                <button type="button" onClick={() => dispatch(minusBtn(item.id))}>∨</button>
                                <p>{item.quantity}</p>
                                <button type="button" onClick={() => dispatch(plusBtn(item.id))}>∧</button>
                            </div>
                        </div>
                    </li>
                )) : <p>장바구니가 비어있습니다.</p>}
            </ul>
            {items.length !== 0 ? <h2>총 : ${total}</h2> : null}
        </div>
    )
}