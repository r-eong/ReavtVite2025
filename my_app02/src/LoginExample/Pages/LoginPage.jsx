import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

// useNaviagte import
import {useNavigate} from 'react-router-dom';

export default function LoginPage(){
    // id, pw 상태 저장 변수
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const {login} = useContext(AuthContext)

    // useVavigate 훅을 변수로 지정
    const navigate = useNavigate();

    const onChangeHandeler = () => {
        if(id === 'admin' && pw === '1234'){
            // 내 id 는 home 에 출력해야함
            login(id)
            alert('로그인 성공')
            // 논리 구현 함수에 <Link to='/'> 사용금지
            navigate('/home')   // home 페이지로 이동
            // navigate(1)   // 현재 페이지보다 하나 앞으로 이동
            // navigate(-1)   // 현재 페이지보다 하나 뒤로 이동
            // navigate(0)   // 현재 페이지 새로고침
            // 단, history 에 페이지가 존재해야 이동이 가능함
        }else{
            alert('아이디, 비밀번호를 확인하세요')
        }
    }

    return(
        <>
        <h2>로그인 페이지</h2>
        <input type="text" onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력하세요"/>
        <input type="text" onChange={(e) => setPw(e.target.value)} placeholder="비밀번호를 입력하세요"/>
        <button type="button" onClick={onChangeHandeler}>로그인</button>
        </>
    )
}