import React, {useState} from "react"

import ProductList from "../shop/ProductList"
import CartModal from "../shop/CartModal"

export default function ShopApp(){
    // 상품 오브젝트 배열 변수
    // 수정/업데이트 되면 안돼서 set~ 없음!
    // products 에 setProdicts 를 만들지 않은 이유 : 
    const [products] = useState([
        { id: 1, name: '노트북', price: 1200000 },
        { id: 2, name: '마우스', price: 25000 },
        { id: 3, name: '키보드', price: 50000 },
    ])

    // 상품 목록엔 수량이 존재하지 않아서 상품 목록을 수정할 수 없다
    // 장바구니에 수량을 추가하여 담기 -> 지곤 상품의 수량을 비교
    // 상품이 존재하면 수량만 증가 기능을 구형할 수 있다
    const [cart, setCart] = useState([])

    // 장바구니 모달 출력하기 위한 변수
    // 장바구니 출력 여부를 제어
    // 현재 - false = 모달 닫힘
    const [showCart, setShowCart] = useState(false)

    // 1. 기존의 장바구니에 담긴 상품이 존재하는지 비교하여 존재하면 
    // 수량만 1씩 증가, 존재하지 않으면 products 모두 장바구니에 추가
    // 기존에 상품이 존재하는지의 여부를 판단하려면 상품 매개변수 필요
    // 아래 addCart 는 자바스크립트 방식
    const addCart = (product) => {
        let cartCopy = [...cart]
        //같은 상품이 존재하는지 여부 체크
        let findCheck = false
        
        // 장바구니에 담긴 상품과 상품 목록의 상품 id가 
        // 같은게 존재하는지 확인하는 부분
        for(let i=0; i<cartCopy.length; i++){
            // 상품비교는 product 의 id 비교 : 고유한 값이기 때문
            if(product.id === cartCopy[i].id){
                // 상품이 같은게 존재하면 수량만 증가
                cartCopy[i].quantity += 1;
                findCheck = true;
                break;
            }
        }

        // 장바구니에 기존의 상품과 같은 상품이 없을 때는 cart 배열에 상품 추가
        // 같은 상품이 존재할 때 findCheck = true
        if(!findCheck){
            cartCopy.push({
                id: product.id, 
                name: product.name, 
                price: product.price, 
                quantity: 1
            })
        }
        setCart(cartCopy)
        console.log('장바구니 담겼나' + cartCopy)
    }

    // 리액트 문법
    // const addCart02 = (product) => {
    //     let cartCopy = [...cart]

    //     // 장바구니에 담긴 상품과 상품 목록의 상품 id가 
    //     // 같은게 존재하는지 확인하는 부분
    //     // 배열이름.findIndex((요소, 인덱스, 원본배열) => return 조건)
    //     // -> 찾고 싶은 항목이 존재하면 그 항목이 존재하는 배열의 인덱스 번호를 반환
    //     // -> 찾고 싶은 항목이 존재하지 않으면 -1 반환
    //     const index = cart.findIndex((item) => item.id === product.id)
    //     // -> 존재하면index = 1, index = -1 (없다)
    //     // 장바구니에 상품이 존재한다 -> index != -1
    //     if(index != -1){
    //         // 수량 증가 코드
    //         cartCopy[index].quantity += 1
    //     }else{
    //         cartCopy.push({
    //             id: product.id, 
    //             name: product.name, 
    //             price: product.price, 
    //             quantity: 1
    //         })
    //     }
        
    //     setCart(cartCopy)
    //     console.log('장바구니 담겼나' + cartCopy)
    // }

    return(
        <>
        <div>
            <h3>쇼핑몰 🛒</h3>
            <button type="button" onClick={() => setShowCart(true)}>장바구니 보기</button>

            <ProductList products = {products} addCart = {addCart} />
            {/* 모달이 showCart = true 이면  cartModal 보이기,
            아니면 null 조건 필요 */}
            {/* cartModal 은 장비가 담긴 목록 UI 출력 */}
            {showCart === true ? <CartModal cart = {cart} onClose = {() => setShowCart(false)} /> : null}
        </div>
        </>
    )
}