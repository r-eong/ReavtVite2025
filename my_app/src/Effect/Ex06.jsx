import React, {useState, useEffect} from "react";

export default function Ex06(){
    const [toggle, setToggle] = useState(false)

    // toggle 핸들러
    const toggleHandelder = () => {
        setToggle(!toggle)
    }

    // onClick 핸들러
    
    return(
        <>
        <h2>Lifecycle Demo</h2>
        <button type="button" onClick={toggleHandelder}>
            {toggle ? '컴포넌트 숨기기' : '컴포넌트 보이기'}
        </button>
        {/* 조건부 랜더링에서 toggle 이 true 일 때 자식 컴포넌트 랜더링 */}
        {toggle && <ChildEx06 toggle = {toggle} />}
        <p>F12를 눌러 콘솔을 확인하세요! <br/>컴포넌트의 마운트/언마운트 메시지가 출력됩니다.</p>
        </>
    )
}




function ChildEx06(){

    useEffect(() => {
        console.log('컴포넌트가 마운트 되었습니다!')
        // claenUp 함수 사용
        return () => {console.log('컴포넌트가 언마운트 되었습니다!')}
    }, [])   // 빈배열로 작성하면 마운트시 1회, 언마운트시 1회 실행됨

    return(
        <p>안녕하세요! 저는 토글 가능한 컴포넌트 입니다!</p>
    )
}