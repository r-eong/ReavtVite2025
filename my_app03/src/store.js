// 2단계 : store.js 만들기
// Redux 의 중앙 저장소 역할을 하는 부분이다
// Slice 를 store 에 등록해야 컴포넌트에서 사용할 수 있다

import { configureStore } from "@reduxjs/toolkit";
import countReducer from './ReduxToolkit/counterSlice'
import cartReduser from './cartEx/CartSlice'

import ProductReducer from '../src/Store02/productSlice.js'
import CartReducer from '../src/Store02/cartSlice.js'

export const store = configureStore({
    reducer: {
        // counter 은 counterClice.js 파일의 name: 'counter' 와 반드시 같아야 한다
        // counter: countReducer,
        // cart: cartReduser,
        list: ProductReducer,
        cart: CartReducer,
    }
})