// 1단계 : slice.js 파일 만들기
// 리덕스의 상태 + 로직을 정의하는 부분
// 이 단계에서는 state 구조, 
// state를 변경하는 reducer 함수, action 생성 함수를 정의

// 생성하는 라이브러리는 creatSlice() 를 import 해야함

import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    // name, initialDtate, reducers 는 모두 예약어임. 작명금지.
    name: 'counter',   // state 이름으로 store 에서 접근할 때 key 로 사용
    // 초기값 : 0 / 'A' / boolean값(true, false) / {item: [...]} / {object: {id: 1, name:'키위'}} / 함수() ...등 사용 가능
    initialState: {value: 0},
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        reset: (state) => {state.value = 0},

        // 5씩 더하는 함수를 생성 -> action 의 payload 를 이용해 상태 변경
        incrementByAmount: (state, action) => {state.value += action.payload}
    }
})
// countSlice.actions 는? action.type -> {type: 'counter/increment'}...를 자동 생성함
export const {increment, decrement, reset, incrementByAmount} = countSlice.actions
console.log(countSlice.actions)
// countSlicer.reducer 는 switch(action.type) {case 'counter/increment' : return atate.value + 1} 함수를 의미
export default countSlice.reducer;