import React, {useState} from "react";

import FoodList from "../food/FoodList";
import CartModal from "../food/CartModal";

export default function FoodApp(){
    // 상품 목록 배열
    const [foods] = useState([
        {id: 1, name: '녹차라떼', price: 12000},
        {id: 2, name: '초코라떼', price: 10000},
        {id: 3, name: '딸기케잌', price: 14000},
        {id: 4, name: '캐모마일티', price: 9000},
        {id: 5, name: '얼그레이티', price: 8000},
    ])
    // 수량 추가 배열
    const [cart, setCart] = useState([])
    // 장바구니 모달 열림/닫힘
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addCart = (food) => {
        // 얕은 복사
        let cartCopy = [...cart]
        const index = cart.findIndex((item) => item.id === food.id)

        if(index !== -1){
            cartCopy[index].quantity += 1
        }else{
            cartCopy.push({
                id:food.id,
                name:food.name,
                price:food.price,
                quantity:1
            })
        }
        setCart(cartCopy)
        console.log('장바구니 담기' + cartCopy)
    }

    return(
        <>
        <div style={{borderRadius: '10px', backgroundColor: '#fcf2f2ff', padding: '20px 30px'}}>
            {/* 상단 */}
            <h3 style={{color: '#d61e1eff'}}>음식 주문 🍰</h3>
            <button type="button" onClick={() => setIsCartOpen(true)} style={{backgroundColor: '#d61e1eff', color: 'white'}}>장바구니</button>
            {/* 음식 목록 */}
            <FoodList foods = {foods} addCart = {addCart} />
            {isCartOpen === true ? <CartModal cart = {cart} onClose = {() => setIsCartOpen(false)} /> : null}
        </div>
        </>
    )
}