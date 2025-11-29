import cookie from 'js-cookie';
import { useState } from 'react';
import './CookieModal.css';

export default function CookieModal(){
    const [isOpen, setIsOpen] = useState(!cookie.get('check'))
    // 체크박스
    const [chek, setChek] = useState(false)

    const coookiecheck = () => {
        // const oneDay = new Date(Date.now() + )
        if(chek){
            // const oneMin = new Date(Date.now() + 1*60*1000)
            cookie.set('check', chek, {expires: 1, path: '/'})
        }
        setIsOpen(false)
    }

    //input핸들러
    const inputHandler = (e) => {
        setChek(e.target.value)
    }
    // 검토시 챗지피티의 권유 코드
    // 왜 value가 아니라 checked를 사용하는게 좋은지 모르겠음
    // const inputHandler = (e) => {
    //     setChek(e.target.checked)
    // }

    return(
        <>
        {isOpen && (
            <div className='box'>
                <div className='img'></div>
                <div className='check'>
                    <input type='checkbox' onChange={inputHandler}/>
                    <label>하루동안 보지않기</label>
                </div>
                <button type='button' onClick={coookiecheck}>닫기</button>
            </div>
        )}
        </>
    )
}