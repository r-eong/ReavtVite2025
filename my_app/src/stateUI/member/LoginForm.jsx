import React, {useState} from "react";

export default function LoginForm(props){
    // 이름
    const [name, setName] = useState('')
    // 비밀번호
    const [pw, setPW] = useState('')

    // 로그인 함수
    const login = () => {
        if(!name || !pw) return alert('입력하세요')
        props.onSucces(name)
    }

    // 로그인 화면 그리기
    return(
        <>
        <div className="loginForm">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
            <input type="password" value={pw} onChange={(e) => setPW(e.target.value)} placeholder="비밀번호" />
            <button onClick={login}>로그인</button>
        </div>
        </>
    )
}