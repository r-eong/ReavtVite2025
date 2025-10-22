import React, {useState} from "react";

export default function Exstate14(){
    const [nowTime, setnowTime] = useState(new Date().toLocaleTimeString())
    
    return(
        <>
        <p>{nowTime}</p>
        <button onClick={() => setnowTime(new Date().toLocaleTimeString())}>갱신</button>
        </>
    )
}