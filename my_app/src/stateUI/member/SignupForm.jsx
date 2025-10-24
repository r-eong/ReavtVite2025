import React, {useState} from "react";

// 자식 컴포넌트
export default function SignupForm(props){
    // 이름
    const [name, setName] = useState('')
    // 비밀번호
    const [pw, setPW] = useState('')

    // 회원가입 함수
    const signup = () => {
        // 예외처리
        if(!name || !pw){
            return alert('입력하세요')
        }
        props.onSucces(name)
    }

    // 가입 폼화면
    return(
        <>
        <div className="signForm">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
            <input type="password" value={pw} onChange={(e) => setPW(e.target.value)} placeholder="비밀번호" />
            <button onClick={signup}>회원가입</button>
        </div>
        </>
    )
}