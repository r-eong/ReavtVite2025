import React, {useEffect, useState} from "react";

export default function Eff05(){
    // setInterval(실행할함수, 시간간격(ms));
    const [time, setTime] = useState(0)

    // 의존성 배열을 사용하지 않은 이유 : 초는 계속 랜더링 되어 변경되어야 하기 때문
    useEffect(() => {
        const timer = setInterval(() => {
        console.log('1초마다 실행');
        setTime(time + 1)
        }, 1000)
        
        return() => clearInterval(timer)
    })

    return(
        <>
        <p>⏰ {time}초 경과</p>
        </>
    )
}