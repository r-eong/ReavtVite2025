import React, {useState} from "react";

export default function Exstate11(){
    const [inColor, setinColor] = useState(0)
    const changeColor = (e) => setinColor(e.target.value)
    
    return(
        <>
        <div style={{
            width: '200px',
            height: '100px',
            backgroundColor: inColor
        }}>
            <input onChange={changeColor} placeholder="예) purple"></input>
        </div>
        </>
    )
}