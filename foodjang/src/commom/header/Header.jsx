import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../header/Header.css'

export default function Header(){
    return(
        <>
        <div className="head_container">
            <div className="Header">
                {/* 가입광고 */}
                <div className="top">
                    <p>지금 가입하고 <strong>인기상품 혜택가</strong>로 받아가세요!</p>
                    {/* 배경 빨간박스 */}
                    <div className="topBox"></div>
                </div>

                <div className="headerTop">
                    {/* 북마크 */}
                    <div className="topLeft">
                        <span>+BOOKMARK</span>
                    </div>

                    {/* 로그인 회원가입 고객센터 장바구니 */}
                    <div className="topRight">
                        <span className="line">로그인</span>
                        <span className="line">회원가입</span>
                        <span className="line">고객센터</span>
                        <span><img src="top_basket2.gif" alt="장바구니" /> / 0</span>
                    </div>
                </div>
                {/* 로고 검색창 */}
                <div className="headerMid">
                    <Link to='/' ><img src="FoodJang-logo.gif" alt="푸드장 로고" /></Link>
                    {/* 검색창 */}
                    <div className="inputBox">
                        <input type="text" placeholder="Chocolate Chip Cookies" />
                        <button type="button"><img src="btn-search.png" alt="검색" /></button>
                    </div>
                </div>
                {/* 메뉴 */}
                <div className="headerFoot">
                    <ul>
                        <Link to='/List'><li><img src="img_3x3_.png" alt="전체 레시피" /> 전체 레시피</li></Link>
                        <Link to='/Difficulty'><li className="line">평점순</li></Link>
                        <Link to='/ReviewCount'><li className="line">리뷰순</li></Link>
                        <li className="line"><img src="tjs.png" alt="선물세트" />선물세트</li>
                        <li className="line">이벤트</li>
                        <li className="line">스토리</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}