import React, {useState} from "react";

export default function Exstate13(){
    const [textAdd, setTextAdd] = useState('')
    const addText = (e) => setTextAdd(e.target.value)
    
    return(
        <>
        <input onChange={addText} value={textAdd}></input>
        <button onClick={() => {setTextAdd('')}}>초기화</button>
        <p>{textAdd}</p>
        </>
    )
}