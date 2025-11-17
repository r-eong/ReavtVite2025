import { createSlice } from "@reduxjs/toolkit";
import Section from "../Pages/Section";
import { act } from "react";

const ProductSlice = createSlice({
    name: 'list',
    initialState: {items: []},
    // 동기적으로 상태를 변경하는 함수들 모임
    reducers: {
        // set+작명 : 업데이트의 의미를 가지는 함수를 생성하기로 약속되어있다
        setProducts: (state, actions) => {
            state.items = actions.payload
        },
    }
})

export const {setProducts} = ProductSlice.actions

export default ProductSlice.reducer