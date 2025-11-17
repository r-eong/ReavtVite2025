import { createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";
import { act } from "react";

const CartSlice = createSlice({
    // name 은 store 에 저장될 key되는 이름. 아주중요
    name: 'cart',
    // items라는 []빈배열 생성. 초기값 생성
    initialState: {items: []},
    // reducers 는 로직
    reducers: {
        addCart: (state, actions) => {
            // actions 를 쓰지 않는 아래 코드는 장바구니에 계속 같은 상품인 사과만 push된다
            // state.items.push({id: 1, name: '사과', price: 12000})
            console.log('들어감?')
            console.log(actions.payload)
            state.items.push(actions.payload)
        },
        delCart: (state, actions) => {
            console.log('아이디 뭐임?')
            console.log(actions.payload)
            // 방법1
            // 같은 상품이 존재하면 삭제하고 아니면 삭제불가
            // 배열이름.findIndex(() => 조건) -> 존재하는 값의 인덱스 번호 출력
            // 값이 존재하지 않으면 -1이 출력됨
            // const delIndex = state.items.findIndex((item) => item.id === actions.payload)
            // if(delIndex !== -1){
            //     // 찾는 값이 존재하면 삭제
            //     state.items.splice(delIndex, 1)
            // }

            // 방법2
            state.items = state.items.filter((item) => item.id !== actions.payload)
        },
        resetCart: (state) => {
            state.items = []
        }
    }
})

// 내보내기
export const {addCart, delCart, resetCart} = CartSlice.actions

// switch ~case 문을 이용한 함수를 자동 생성하는 부분
export default CartSlice.reducer