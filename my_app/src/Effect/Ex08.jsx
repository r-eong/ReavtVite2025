import React, {useState, useEffect} from "react";

export default function Ex08(){
    const [num01, setNum01] = useState(0)
    const [num02, setNum02] = useState(0)

    useEffect(() => {
        console.log(`${num01} x ${num02} = ${num01*num02}`)
    },[num01, num02])

    // 인풋 onChange 핸들러
    const inputHandeler01 = (e) => {
        setNum01(e.target.value)
    }
    const inputHandeler02 = (e) => {
        setNum02(e.target.value)
    }

    return(
        <>
        <h2>곱셈 계산기</h2>
        <span>첫 번째 숫자</span>
        <input type="number" onChange={inputHandeler01} value={num01} placeholder="숫자를 입력하세요" />
        <br/>
        <br/>
        <span>두 번째 숫자</span>
        <input type="number" onChange={inputHandeler02} value={num02} placeholder="숫자를 입력하세요" />

        <h4>결과</h4>
        <h2>{`${num01*num02}`}</h2>
        <p>콘솔을 열면 계산 과정도 확인할 수 있습니다</p>
        </>
    )
}