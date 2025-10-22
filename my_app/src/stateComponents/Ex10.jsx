import React, {useState} from "react";

export default function Exstate10(){
    const [num, setnum] = useState(0)
    // console.log(num < 0)
    // console.log(num -1)
    
    return(
        <>
        <button onClick={() => num<=0 ? alert('0 이하는 안됨') : setnum(num - 1)}>-</button>
        <p>{num}</p>
        <button onClick={() => setnum(num + 1)}>+</button>
        </>
    )
}