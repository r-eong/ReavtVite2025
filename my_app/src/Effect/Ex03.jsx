import React, {useState, useEffect} from "react";

export default function Ex03(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        // setCount(count)
        console.log(`현재 카운트 : ${count}`)
    }, [count])

    // - 핸들러
    const minHandeler = () => {
        setCount(count - 1)
    }
    // + 핸들러
    const pluseHandeler = () => {
        setCount(count + 1)
    }

    return(
        <>
        <h2>Counter with useEffect</h2>
        <button type="button" onClick={minHandeler}>-</button>
        <span>{count}</span>
        <button type="button"onClick={pluseHandeler}>+</button>
        <p>콘솔을 확인하세요! 카운트가 변경될 때마다 로그가 출력됩니다.</p>
        </>
    )
}