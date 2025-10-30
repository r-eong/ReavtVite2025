import React, {useState, useEffect} from "react";

export default function Ex11(){
    const [inputName, setInptName] = useState('')
    const [inputAge, setInptAge] = useState('')

    useEffect(() => {
        if(inputName.trim()){
            console.log('이름이 변경되었습니다')
        }
    },[inputName])

    useEffect(() => {
        if(inputAge.trim()){
            console.log('나이가 변경되었습니다')
        }
    },[inputAge])

    const inputHandeler01 = (e) => {
        setInptName(e.target.value)
    }
    const inputHandeler02 = (e) => {
        setInptAge(e.target.value)
    }

    return(
        <>
        <input type="text" onChange={inputHandeler01} value={inputName} placeholder="이름을 입력하세요" />
        <input type="text" onChange={inputHandeler02} value={inputAge} placeholder="나이를 입력하세요" />
        </>
    )
}