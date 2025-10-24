import React, {useState} from "react";
import LoginForm from '../member/LoginForm'
import SignupForm from '../member/SignupForm'
import Message from '../member/Message'

// 부모 컴포넌트 - 회원가입 상태, 메세지만 관리함
export default function AuthApp(){
    const [isLogin, setIsLogin] = useState(true)
    const[msg, setMsg] = useState('')

    return(
        <>
        <div style={{padding: '20px'}}>
            <h2>로그인/회원가입 🗝</h2>
            <Message msg={msg} />
            {/* 회원가입 하고 회원가입 버튼 클릭하면 
            '회원가입 완료! 환영합니다 {name}님!' */}
            {/* 로그인이 완료되면 '환영합니다! {name}님!' */}
            {isLogin ? <LoginForm onSucces={(name) => setMsg(`환영합니다! ${name}님!`)} /> 
            : <SignupForm onSucces={(name) => setMsg(`회원가입 완료! 환영합니다 ${name}님!`)} />}
            <button onClick={() => {setIsLogin(!isLogin); setMsg('');}}>{isLogin ? '회원가입하기' : '로그인'}</button>
        </div>
        </>
    )
}