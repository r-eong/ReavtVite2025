import React, {useState, useEffect} from "react";

export default function Ex02(){
    
    useEffect(() => {
        document.title = 'Welecome to React!'
    },[])

    return(
        <>
        <h2>Title Changer</h2>
        <p>브라우저 탭을 확인해보세요!<br/>제목이 "Welecome to React!"로 변경되었습니다.</p>
        </>
    )
}