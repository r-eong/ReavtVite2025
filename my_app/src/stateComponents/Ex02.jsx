import React, {useState} from "react";

export default function Exstate02(){
    const [text, setText] = useState('')
    
    const changeText = (e) => setText(e.target.value)
    
    return(
        <>
        <input type="text" onChange={changeText} placeholder="입력하세요"></input>
        {/* input 의 onChange() 함수 이용
            elemnt.target.value = e.target.value
            ┖> imput 에 입력한 값을 가져올 수 있다 */}
        <p>입력한 내용 : {text}</p>
        </>
    )
}