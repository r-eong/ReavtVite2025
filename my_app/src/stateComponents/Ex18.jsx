import React, {useState} from "react";

// props 는 부모에서 자식으로 데이터를 읽기 전용으로 보내준다
// props 는 값, 변수, 함수 모두 props 로 보내진다

// 부모 컴포넌트
export default function Exstate18(){
    const [num, setNum] = useState(0);
    
    return(
        <>
        <p>값 : {num}</p>
        <Child18 Btn = {() => (setNum(num + 1))} />
        </>
    )
}

// 자식 컴포넌트
function Child18(props){
    return(
        <>
        <button onClick={props.Btn}>+1</button>
        </>
    )
}