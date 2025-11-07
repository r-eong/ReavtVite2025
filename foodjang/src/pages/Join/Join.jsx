import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../Login/AuthContext";

import './Join.css'
import './PostCode'
import PostCode from "./PostCode";

export default function Join(){
    return(
        <div className="Join">
            <h2>회원가입</h2>
            <button type="button">
                <img src="pc_kakao_logo.png" alt="카카오톡으로 회원가입/로그인"/>
                카카오톡으로 간편 회원가입
            </button>
            <form action="#" method="post">
                <ul className="join_information">
                    <li>
                        <label htmlFor="userID"><span>*</span>아이디</label>
                        <input type="text" name="userID" id="userID"/>
                    </li>
                    <li>
                        <label htmlFor="userPW"><span>*</span>비밀번호</label>
                        <input type="password" name="userPW" id="userPW"/>
                    </li>
                    <li>
                        <label htmlFor="userPWre"><span>*</span>비밀번호 확인</label>
                        <input type="password" name="userPWre" id="userPWre"/>
                    </li>
                    <li>
                        <label htmlFor="userName"><span>*</span>이름</label>
                        <input type="text" name="userName" id="userName"/>
                    </li>
                    <li>
                        <label htmlFor="userPhone"><span>*</span>휴대폰 번호</label>
                        <input type="number" name="userPhone" id="userPhone" placeholder="- 없이 입력하세요"/>
                        <button type="submit">휴대폰 본인인증</button>
                    </li>
                    <li>
                        <label htmlFor="userEmail">이메일</label>
                        <input type="email" name="userEmail" id="userEmail" placeholder="example@foodjang.com"/>
                    </li>
                    <li>
                        <label>주소</label>
                        <PostCode />
                    </li>
                    <li>
                        <label><span>*</span>성별</label>
                        <input type="checkbox" name="userGender_man" id="userGender_man"/>
                        <label htmlFor="userGender_man">남성</label>
                        <input type="checkbox" name="userGender_woman" id="userGender_woman"/>
                        <label htmlFor="userGender_woman">여성</label>
                    </li>
                    <li className="birth">
                        <label><span>*</span>생년월일</label>
                        <div>
                            <input type="number" name="bitrh_year" id="bitrh_year" placeholder="YYYY"/>/
                            <input type="number" name="bitrh_month" id="bitrh_month" placeholder="MM"/>/
                            <input type="number" name="bitrh_day" id="bitrh_day" placeholder="DD"/>
                        </div>
                    </li>
                    <li>
                        <label>추천인 아이디</label>
                        <input type="text" name="RecommenderID" id="RecommenderID"/>
                        <label htmlFor="RecommenderID"></label>

                    </li>
                </ul>
                <ul className="terms_all">
                    <li>
                        <input type="checkbox" name="terms_mkt" id="terms_mkt"/>
                        <label htmlFor="terms_mkt">무료배송, 할일쿠폰 등 혜택/정보 수신 <span>(선택)</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name="terms_age" id="terms_age"/>
                        <label htmlFor="terms_age">만 14세 이상 동의 <span>(필수)</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name="terms_srv" id="terms_srv"/>
                        <label htmlFor="terms_srv">이용약관 동의 <span>(필수)</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name="terms_priv" id="terms_priv"/>
                        <label htmlFor="terms_priv">개인정보 수집 및 이용 동의 <span>(필수)</span></label>
                    </li>
                </ul>
                <button type="button">동의하고 가입하기</button>
            </form>
        </div>
    )
}