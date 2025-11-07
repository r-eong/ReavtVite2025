import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../Login/AuthContext";

import '../Login/Login.css'

export default function Login(){
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const {login} = useContext(AuthContext)
  
    const navigate = useNavigate()

    const onChangeHandeler = () => {
        if(id === 'admin' && pw === '1234'){
            login(id)
            navigate('/')
        }else{
            alert('아이디, 비밀번호를 확인하세요')
        }
    }

    return(
        <div className="Login">
            <h1>로그인</h1>
            {/* 회원 로그인 */}
            <div className="member_login">
                <h3>회원 로그인</h3>
                <div className="login_form">
                    <div className="formInput">
                        <input type="text" onChange={(e) => setId(e.target.value)} placeholder="아이디" />
                        <input type="text" onChange={(e) => setPw(e.target.value)} placeholder="비밀번호" />
                    </div>
                    <button type="button" onClick={onChangeHandeler}>로그인</button>
                </div>
                <div className="remember_id">
                    <input type="checkbox" id="checkBox"/>
                    <label for="checkBox"> 아이디 저장</label>
                </div>
            </div>
            {/* 회원가입 아이디찾기 비밀번호 찾기 / 카카오톡으로 로그인 */}
            <div className="login_actions">
                <button type="button">
                    <img src="pc_kakao_logo.png" alt="카카오톡으로 회원가입/로그인"/>
                    카카오톡으로 회원가입/로그인
                </button>
                <div className="loginOptions">
                    <button type="button">회원가입</button>
                    <button type="button">아이디 찾기</button>
                    <button type="button">비밀번호 찾기</button>
                </div>
            </div>
            {/* 비회원 주문조회 */}
            <div className="nonmember_order">
                <h3>비회원 주문조회 하기</h3>
                <div className="nonmember_form">
                    <div className="nonmember_formInput">
                        <input type="text" placeholder="주문자명" />
                        <input type="text" placeholder="주문번호" />
                    </div>
                    <button type="button">확인</button>
                </div>
                <p>
                    <img src="icon_caution.png" alt="주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다."/>
                    주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.
                </p>
            </div>
        </div>
    )
}