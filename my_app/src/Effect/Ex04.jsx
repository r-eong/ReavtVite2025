import React, {useState, useEffect} from "react";

export default function Ex04(){
    // time 상태를 변경하는 변수
    const [time0, setTime0] = useState(0)

    // setInterval(() => , {}, 초) : 실행을 반복
    // setTimeOut(() => , {}, 초) : 1번만 실행

    useEffect(() => {
        const timer = setInterval(() => {setTime0(time0 + 1)}, 1000)
        // cleanUp 함수 : 언마운트 될 때 삭제되는 함수
        // return
        return  () => {clearInterval(timer)}
    })

    return(
        <>
        <h2>자동 타이머</h2>
        <span>{time0}</span>
        <span>초가 경과했습니다</span>
        </>
    )
}