import React, {useState} from "react";

export default function Exstate08(){
    const [changeText, setchangeText] = useState('좋아요 👍')
    
    return(
        <>
        <p>{changeText}</p>
        <button onClick={() => setchangeText(changeText === '좋아요 👍' ? '싫어요 👎' : '좋아요 👍')}>변경</button>
        </>
    )
}