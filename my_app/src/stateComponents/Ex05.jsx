import React, {useState} from "react";

export default function Exstate05(){
    const [onOff, setonOff] = useState(true)
    
    return(
        <>
        <button onClick={() => setonOff(!onOff)}>
            이미지 토글
        </button>
        <img src="/vite.svg" alt="이미지" 
        style={{display: onOff === true ? 'block' : 'none'}}/>
        {/* 위, 아래 같은 기능임! */}
        {/* {onOff && <img src="/vite.svg" />} */}
        </>
    )
}