import React, {useState, useEffect} from "react";

export default function Ex01(){
    // 모든 HOOK의 생명주기 존재
    // ┖> 1. 마운트(랜더 시작) -> 2. 업데이트(setUpdate()) -> 3. 업데이트 된 내용 리랜더 되고 난 루 언마운트(삭제)됨

    // useState() : 렌더, 업데이트시 필요
    // useEffect() : 렌더 이외의 작업, 네트워크에 관련된 자료 가져오는 일 등

    // useEffect(() => {}) : 랜더될 때 마다 실행
    // useEffect(() => {},[]) : 처음 랜더될때만. 1회 실행
    // useEffect(() => {},[의존성 배열]) : 의존성 배열이 실행될 때마다 실행

    useEffect(() => {
        console.log('컴포넌트가 마운트되었습니다!')
    },[])

    return(
        <>
        <h2>useEffect 기본 예제</h2>
        <p>F12를 눌러 콘솔을 확인해보세요! <br/>"컴포넌트가 마운트되었습니다!" 메시지가 출력됩니다</p>
        </>
    )
}