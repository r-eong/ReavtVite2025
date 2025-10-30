import React, {useState, useEffect} from "react";

export default function Ex07(){
    const [nowTime, setNowTime] = useState(new Date())
    
    useEffect(() => {
        const timer = setInterval(() => {
            // 현재 시간 가져오기 : 얕은복사같은 개념임!
            const now = new Date()
            // 상태를 업데이트하면 화면도 같이 바뀜
            setNowTime(now)
        }, 1000)
        
        console.log(nowTime)
        return () => clearInterval(timer)
    }, [])
    
    // 시 : 분 : 초 - 두 자리씩 출력되게하는 함수
    // 10 이하의 모든 숫자의 앞에 0을 붙여줌
    const twotime = (num) => (num < 10 ? `0${num}` : num)
    
    // 시 분 초 추출
    const hours = twotime(nowTime.getHours())
    const minutes = twotime(nowTime.getMinutes())
    const seconds = twotime(nowTime.getSeconds())
    
    return(
        <>
        <h3>DIGITAL CLOCK</h3>
        <h1>{hours} : {minutes} : {seconds}</h1>
        {/* 현재 지금 지역의 날짜를 영문법으로 출력 */}
        <h4>{nowTime.toLocaleDateString()}</h4>
        </>
    )
}