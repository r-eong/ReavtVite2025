import React, {useState} from "react";

export default function Exstate04(){
    const [count, setCount] = useState(0)
    // console.log('누적카운트' + count)
    // console.log('수정카운트' + setCount)
    
    return(
        <>
        <p>👍 {count}</p>
        <button onClick={() => setCount(count +1) }>좋아요</button>
        </>
    )
}