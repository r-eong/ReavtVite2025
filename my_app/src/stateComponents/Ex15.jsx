import React, {useState} from "react";

export default function Exstate15(){
    const [name, setName] = useState('홍길동')
    const [age, setAge] = useState(20)
    const userName = () => setName(name === '홍길동' ? '이순신' : '홍길동')
    const userAge = () => setAge(age === 20 ? 30 : 20)
    
    function user(){
        userName()
        userAge()
    }
    return(
        <>
        <p>{name} {age}</p>
        <button onClick={user}>정보 변경</button>
        </>
    )
}  