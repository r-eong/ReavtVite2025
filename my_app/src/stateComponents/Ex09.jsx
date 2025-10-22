import React, {useState} from "react";

export default function Exstate09(){
    const [num, setnum] = useState(0)
    
    return(
        <>
        <p>{num}</p>
        <button onClick={() => setnum(num + 1)}>+</button>
        <p>{num % 2 === 0 ? '짝수입니다' : ''}</p>
        </>
    )
}