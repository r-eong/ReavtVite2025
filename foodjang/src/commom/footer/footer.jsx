import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../footer/Footer.css'

export default function Footer(){
    return(
        <>
        <div className="foot_container">
            <div className="Footer">
                {/* 회사소개 공고 이용안내 ... */}
                <div className="footerTop">
                    <ul>
                        <li>회사소개</li>
                        <li>공고</li>
                        <li>이용안내</li>
                        <li><strong>개인정보처리방침</strong></li>
                        <li>이용약관</li>
                        <li>입점문의</li>
                        <li>대량주문</li>
                        <li>1:1 문의</li>
                        <li>이용후기</li>
                    </ul>
                </div>
                {/* 상단 제외전부 */}
                <div className="footerfoot">
                    {/* 고객센터 안내 */}
                    <div className="serviceCenter">
                        <h2>고객센터</h2>
                        <h1>1899-4797</h1>
                        <br/>
                        <p>평일 10:00 ~ 17:00</p>
                        <p>점심시간 12:00 ~ 13:00</p>
                        <p>토요일/일요일/공휴일 휴무</p>
                    </div>
                    {/* 회사 정보 ... */}
                    <div className="companyInfo">
                        {/* 회사 연락·위치 정보 */}
                        <div className="company_contact">
                            <Link to='/' ><img src="FoodJang-logo.gif" alt="푸드장 로고" /></Link>
                            <div className="contact">
                                <p>COMPANY : (주)푸드장 / OWNER : 조제효 / CALL CENTER : 1899-4797 / FAX : 02-356-8448</p>
                                <p>ADDRESS : 본사 (사무실) - 서울특별시 서초구 사임당로 52(서초동) 2층 푸드장</p>
                                <p className="address">반품 주소지 (물류센터) - 경기도 고양시 일산동구 감내길 22푸드장</p>
                            </div>
                        </div>
                        {/* 법적·공식 등록 정보 및 Copyright 영역 */}
                        <div className="company_legal">
                            <p>개인정보관리책임자 : 조제효 help@foodjang.com</p>
                            <p>사업자등록번호 : [188-87-00048] / 통신판매업 신고번호 : 제2023-서울서초-0995호 [사업자정보확인]</p>
                            <p className="accountNum">입금계좌 : (주)푸드장 - 기업은행 55503373004011 (기타 은행은 고객센터로 문의)</p>
                            <br/>
                            <h4>Copyright (c) by foodjang.com. All Right Reserved.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}