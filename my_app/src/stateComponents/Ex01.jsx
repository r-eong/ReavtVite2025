import React, {useState} from "react";

export default function Exstate01(){
    const [text, setText] = useState('안녕하세요')

    const changeText = () => setText(text ===  '안녕하세요' ? 'Hello' : '안녕하세요')

    return(
        <>
        <h3>{text}</h3>
        <button onClick={changeText}>Toggle</button>
        </>
    )
}