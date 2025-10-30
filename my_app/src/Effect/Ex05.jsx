import React, {useState, useEffect} from "react";

export default function Ex05(){
    const [title, setTitle] = useState('')
    useEffect(() => {
        // 예외처리 - 입력값이 없을 때, 있을때
        if(title.trim() !== ''){
            document.title = title
        }else{
            document.title = '제목을 입력하세요'
        }
    }, [title])

    // onChange 핸들러
    const changeHandeler = (e) => {
        setTitle(e.target.value)
    }

    return(
        <>
        <h2>Dynamic Titme Generator</h2>
        <input type="text" onChange={changeHandeler} value={title} placeholder="브라우저 탭 제목을 입력하세요" />
        <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다!</p>
        </>
        
    )
}