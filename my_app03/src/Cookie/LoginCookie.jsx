import cookie from 'js-cookie';
import { useState } from 'react';
import './LoginNaver.css';

export default function LoginCookie(){
const [userId, setUserId] = useState(cookie.get('userId') || '')
const [userPw, setUserPw] = useState()
// 아이디 저장 체크박스가 체크되면 아이디 저장, true, false 이용
const saveId = cookie.get('userId')
const [idChk, setidChk] = useState(saveId ? true : false)
// const [inputValue, setInputValue] = ('')

// 체크박스
const idChkHandeler = (e) => {
    setidChk(e.target.value)
}

// 로그인버튼
// form 안에 로그인 버튼을 클릭하면 페이지가 새로고침된다. - 리액트 특징임!
// 새로고침되면 리액트 상태가 초기화됨
// 화면에 input 값과 체크박스 상태도 모두 사라진다
// 위의 오류를 해결하려면 반드시 e.prevebtDefault() 가 필요하다
const loginHandeler = (e) => {
    e.preventDefault() // 폼의 기본 제출 동작을 막음
    if(idChk){
        // 1분 위 쿠키 만료
        const oneMin = new Date(Date.now() + 1*60*1000)
        cookie.set('userId', userId, {expires : oneMin, path : '/'})
    }else{
        cookie.remove('userId', {path : '/'})
    }
    alert(`로그인시도 : ${userId}`)
}

return(
    <>
    <h1>NAVER</h1>
    <h4>ID / PW</h4>
    <form onSubmit={loginHandeler}>
        <div className='IdPw'>
            <input type='text' onChange={(e) => setUserId(e.target.value)} placeholder='아이디 또는 전화번호' />
            <input type='text' onChange={(e) => setUserPw(e.target.value)} placeholder='비밀번호' />
        </div>
        <div className='check'>
            <input type='checkbox' onChange={idChkHandeler}></input>
            <label type='text'>아이디저장</label>
        </div>
        <button type='submit'>로그인</button>
    </form>
    </>
)
}