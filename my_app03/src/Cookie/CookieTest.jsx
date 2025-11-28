import cookie from 'js-cookie';
import { useState } from 'react';
import { data } from 'react-router-dom';

export default function CookieTest(){
    // cookie 를 읽어와서 cookievalue 상태변수에 저장한다.
    // const [cookieValue, setCoookieValue] = useState(cookie.get('userName'));
    // 쿠키가 1분뒤에 자동삭제 되면 홍길동이 화면에서 사라진다
    const [cookieValue, setCoookieValue] = useState(cookie.get('userName') || '');

    // cookie 를 저장하는 함수 생성
    const cookieSave = () => {
        // cookie 의 값을 저장할 때의 명령어 cookie.set(key, value, expires) <- (키, 값, 만료시간)
        // {expires : 1}) = 1일동안 유지
        const oneMin = new Date(Date.now() + 1*60*1000)  // = 1분 유지
        // cookie.set('userName', '홍길동', {expires : 1})
        cookie.set('userName', '홍길동', {expires : oneMin, path : '/'})
        setCoookieValue('홍길동')
        alert('쿠키 저장됨')
    }

    // cookie 확인하는 함수 생성
    const cookieChk = () => {
        const value = cookie.get('userName')
        // cookie.get()은 값이 없으면 undefined 를 반환한다
        console.log(value)
        if(value !== undefined){
            // cookie 에 저장된 값이 존재한다
            alert(`쿠키 ${value}`)
        }else{
            alert('쿠키가 없음')
        }
    }

    // cookie 삭제하는 함수 생성
    const cookieDel = () => {
        // cookie.remove('key')
        cookie.remove('userName')
        setCoookieValue('')
        alert('쿠기가 삭제되었습니다')
    }

    return(
        <>
        <h2>쿠키 예제</h2>
        <p>현재 쿠키값 : {cookieValue}</p>
        <button type='button' onClick={cookieSave} style={{backgroundColor:'dodgerblue', color:'#fff'}}>
            쿠키저장
        </button>
        <button type='button' onClick={cookieChk} style={{backgroundColor:'dodgerblue', color:'#fff'}}>
            쿠키확인
        </button>
        <button type='button' onClick={cookieDel} style={{backgroundColor:'dodgerblue', color:'#fff'}}>
            쿠키삭제
        </button>
        </>
    )
}