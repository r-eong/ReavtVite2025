import { createSlice } from "@reduxjs/toolkit";
import CartPage from "../Pages/CartPage";
import { act } from "react";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {items: []},
    reducers: {
        addCart: (state, actions) => {
            // 만약 이미 담긴 상품이 존재하면 수량만 1씩 증가하고
            // 담긴 상품이 없다면 quantity:1 을 삽입한다
            // 존재 -> 배열이름.find(() => 조건)
            // 찾는 값이 존재하면 그 값이 배열 출력, 없으면 undefined
            const newItem = actions.payload
            const indexFind = state.items.find((item) => item.id === newItem.id)

            if(indexFind === undefined){
                // 장바구니에 같은 상품이 존재하지 않는다
                // let newItemCopy = [...newItem]
                // ...newItem -> 스프레드 문법(spread Operator)
                // newItem 을 펼쳐서 보여준다
                // const newItem = {
                //    id: 1. name: '사과', price: 10000
                // } <- 펼쳐놓은 곳에 quantity:1 을 삽입
                state.items.push({...newItem, quantity: 1})
            }else{
                // 같은 상품 존재하면 +1
                indexFind.quantity += 1
            }
            console.log('추가')
            console.log(actions.payload)
        },
        delCart: (state, actions) => {
            console.log('아이디 확인')
            console.log(actions.payload)

            // state.items = state.items.filter((item) => item.id !== actions.payload)
            const delIndex = state.items.findIndex((item) => item.id === actions.payload)
            if(delIndex !== -1){
                state.items.splice(delIndex, 1)
            }
        },
        resetCart: (state) => {
            state.items = []
        },
        plusBtn: (state, actions) => {
            // CartPage.jsx 의 up버튼 클릭시 내보내지는 item
            const id = actions.payload
            // id 가 같은 상품만 수량 증가 필요
            // state 없이 items 접근 불가능
            // 배열이름.find() 함수는 값이 없으면 undetined가 출력됨
            // find() 함수는 값이 존재하면 배열로 출력 -> itemId = [{quantity: 1}]
            const itemId = state.items.find((item) => item.id === id)
            if(itemId !== undefined){
                // 상품이 존재한다면~
                itemId.quantity += 1
            }
        },
        minusBtn: (state, actions) => {
            const id = actions.payload
            const itemId = state.items.find((item) => item.id === id)
            if(itemId !== undefined && itemId.quantity > 1){
                itemId.quantity -= 1
            }
        },
    }
})

export const {addCart, delCart, resetCart, count, plusBtn, minusBtn} = cartSlice.actions

export default cartSlice.reducer