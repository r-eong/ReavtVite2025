import './TableOrder.css'

import React, {useState} from "react";

import JellyCatList from "./JellyCatList";
import CartModal from "./CartModal";

export default function JellyCatApp(){
    const [JellyCat] = useState([
        // 동물
        { id:1, name: '바쉬풀 베이지 버니', img: 'BAS3B__86106.jpg',price: 38000, category: 1},
        { id:2, name: '바톨로뮤 베어', img: 'BARM3BR__34471.jpg',price: 42000, category: 1},
        { id:3, name: '바쉬풀 블랙 앤 크림 퍼피', img: 'BAS3BCP__97122.jpg',price: 52000, category: 1},
        { id:4, name: '텀블리 쉽 도그', img: 'TM6SD__84726.jpg',price: 58000, category: 1},
        { id:5, name: '먼로 스코티 도그', img: 'MUN3SD__55409.jpg',price: 62000, category: 1},
        { id:6, name: '스카이 드래곤', img: 'SKY2DD__52104.jpg',price: 112000, category: 1},
        { id:7, name: '리틀 스네이크', img: 'L3S__35491.jpg',price: 42000, category: 1},
        { id:8, name: '야미 더클링', img: 'YUM6DK__45669.jpg',price: 38000, category: 1},
        { id:9, name: '스머지 엘리펀트', img: 'SMG2EL__55286.jpg',price: 62000, category: 1},
        { id:10, name: '퍼들우들 라이언', img: 'FW6LN__00145.jpg',price: 58000, category: 1},
        { id:11, name: '리틀 램', img: 'L3L__50287.jpg',price: 42000, category: 1},
        // 푸드 & 드링크
        { id:12, name: '어뮤저블스 버스데이 케이크', img: 'A2BC__50563.jpg',price: 62000, category: 1},
        { id:13, name: '어뮤저블스 피치', img: 'A6PEACH__73374.jpg',price: 48000, category: 2},
        { id:14, name: '어뮤저블스 크루아상', img: 'A6C__41256.jpg',price: 42000, category: 2},
        { id:15, name: '어뮤저블스 바게트', img: 'A2BAGET__40926.jpg',price: 58000, category: 2},
        { id:16, name: '어뮤저블스 트리 쿠키', img: 'A6GTC__79783.jpg',price: 42000, category: 2},
        { id:17, name: '어뮤저블스 체리', img: 'A6CHR__92309.jpg',price: 48000, category: 2},
        { id:18, name: '어뮤저블스 피넛 아프레 스키', img: 'A6PES__85527.jpg',price: 48000, category: 2},
        { id:19, name: '어뮤저블스 핑크 앤 화이트 마시멜로즈', img: 'A6MPW__92454.jpg',price: 52000, category: 2},
        { id:20, name: '어뮤저블스 플로렛 딸기 타르트', img: 'A6TAF__52727.jpg',price: 48000, category: 2},
        { id:21, name: '어뮤저블스 오버진', img: 'VV6A__27053.jpg',price: 32000, category: 2},
        { id:22, name: '어뮤저블스 보일드 에그 시크', img: 'A6BEC__06959.jpg',price: 42000, category: 2},
        { id:23, name: '어뮤저블스 맥스 마카롱', img: 'A6MACP__07861.jpg',price: 42000, category: 2},
        { id:24, name: '어뮤저블스 피클', img: 'A6PIC__65004.jpg',price: 42000, category: 2},
        // 가방 & 백참
        { id:25, name: '어뮤저블스 스포츠 풋볼 백참', img: 'AS4UKFBC__25039.jpg',price: 58000, category: 3},
        { id:26, name: '클라이드 카피바라 백참', img: 'CLY4CBC__25468.jpg',price: 58000, category: 3},
        { id:27, name: '어뮤저블스 스포츠 테니스 백참', img: 'AS4TBC__91895.jpg',price: 58000, category: 3},
        { id:28, name: '어뮤저블스 퍼클 커피 백참', img: 'ACOF4BC__41205.jpg',price: 52000, category: 3},
        { id:29, name: '어뮤저블스 시러스 스톰 클라우드 백참', img: 'A4SCLBC__33863.jpg',price: 52000, category: 3},
        { id:30, name: '어뮤저블스 썬 백참', img: 'A4SBC__42558.jpg',price: 52000, category: 3},
        { id:31, name: '어뮤저블스 프레첼 백참', img: 'A4PRETBC__12166.jpg',price: 5200, category: 3},
        { id:32, name: '어뮤저블스 체리즈 백참', img: 'A4CHSBC__56300.jpg',price: 58000, category: 3},
        { id:33, name: '블로썸 베이지 버니 페탈 백참', img: 'BAS4BMBC__86750.jpg',price: 58000, category: 3},
        { id:34, name: '피넛 펭귄 백참', img: 'PNBC4PN__74401.jpg',price: 58000, category: 3},
        { id:35, name: '바톨로뮤 베어 토트백', img: 'BAR2BT__93145.jpg',price: 152000, category: 3},
        { id:36, name: '바톨로뮤 베어 백팩', img: 'BAR4BP__52508.jpg',price: 112000, category: 3},
        // 할로윈
        { id:37, name: '어뮤저블스 토피 애플', img: 'A6TFA__34768.jpg',price: 42000, category: 4},
        { id:38, name: '바솔로뮤 베어 스파이더', img: 'BARM2SP__18270.jpg',price: 112000, category: 4},
        { id:39, name: '헤카티 후트나이틀리', img: 'OWL3W__72406.jpg',price: 38000, category: 4},
        { id:40, name: '호커스 크로우', img: 'CRO3W__98396.jpg',price: 28000, category: 4},
        { id:41, name: '잭오랜턴', img: 'OOK3JOL__63600.jpg',price: 32000, category: 4},
        { id:42, name: '미스티 고스트', img: 'GH3ST__74135.jpg',price: 32000, category: 4},
        { id:43, name: '스켈레톤 밥', img: 'SKE3B__96495.jpg',price: 38000, category: 4},
        { id:44, name: '스푸키포 고양이', img: 'XAN3BC__81034.jpg',price: 32000, category: 4},
        { id:45, name: '코스모 몬스터', img: 'COS2M__20323.jpg',price: 38000, category: 4},
        { id:46, name: '엄마 밥', img: 'MUM3B__21192.jpg',price: 38000, category: 4},
        { id:47, name: '앰비저블 스컬 플랜터', img: 'A6SKPL__52410.jpg',price: 42000, category: 4},
        { id:48, name: '원다 웜뱃', img: 'WOM3BAT__15773.jpg',price: 48000, category: 4},
    ])

    // 카테고리
    const [categoryImg, setCategoryImg] = useState(1)
    const filterImg = JellyCat.filter((dolls) => (dolls.category === categoryImg))

    // 주문내역 모달
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)

    const addCart = (doll) => {
        let cartCopy = [...cart]

        const index = cart.findIndex((item) => item.id === doll.id)

        if(index !== -1){
            cartCopy[index].quantity += 1
        }else{
            cartCopy.push({
                id: doll.id,
                name: doll.name,
                img: doll.img,
                price: doll.price,
                category: doll.category,
                quantity: 1
            })
        }
        setCart(cartCopy)
        console.log(cartCopy)
    }

    return(
        <div className="container">
            <div className="menu">
                <h1>8</h1>
                <ul>
                    <li onClick={() => setCategoryImg(1)}>동물</li>
                    <li onClick={() => setCategoryImg(2)}>푸드 & 드링크</li>
                    <li onClick={() => setCategoryImg(3)}>가방 & 백참</li>
                    <li onClick={() => setCategoryImg(4)}>할로윈</li>
                </ul>
            </div>
            <button type='button' onClick={() => addCart(true)}>주문내역</button>
            {showCart === true ? <CartModal cart = {cart} modalOn = {() => setShowCart(false)} /> : null}
            <JellyCatList 
            addCart = {addCart}
            filterImg = {filterImg} 
            JellyCat = {JellyCat}
             />
        </div>
    )
}