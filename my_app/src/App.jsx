import { useState } from 'react'

// src -> assets -> 이미지 파일은 반드시 import 해야한다
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import 는 외부 파일을 가져온다.
// import './App.css'

// react 는 이미지를 하나하나 import 해서 개별로 가져올 수 있다
// ┖> image01 라는 이름은 변수처럼 내 마음대로 지정할 수 있음!
// public 폴더의 이미지 파일은 import하지 않아도 사용 가능
import image01 from '../public/images/image01.png';


import JellyCatApp from './stateUI/TableOrder/JellyCatApp';

import ShopApp from './stateUI/shop/ShopApp';







// 문제10
// UserCard() 함수 생성하기
// UserCard() 컴포넌트를 App() 컴포넌트의 자식으로 사용
// App() 컴포넌트의 name, age 매개변수를 props 명령어를 이용해 
// 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다.
// 부모에서 자식만 매개변수 보낼 수 있다.
// props 는 부모의 모든 매개변수를 대변한다.
// {props.name}, {props.age}
// props 로 매개변수를 보내지 않고 직접 매개변수 값을 
// 지정해 {name, age} 형식으로 작성한다.
function UserCard(props){
// ┖> = function UserCard(name, age){
  return(
    <>
    <div style={{
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px'
      }}>
        <h2>{props.name}</h2>
        {/* ┖> = <h2>{name}</h2> */}
        <h2>{props.age}</h2>
        {/* ┖> = <h2>{age}</h2> */}
    </div>
    </>
  )
}

// function App(){}
// ┖> react에서 App()는 컴포넌트라고 부른다
function App() {
  // 리액트는 반드시 return() 안에서 실행할 HTML 문서를 작성한다.
  const name = '홍길동';

  // 문제5
  // true, false 는 논리값이다. 문자가 아님.
  // ┖> true === 1, false === 0 라고 생각하면 됨
  const isLoggin = true;

  // 문제6
  const fruits = ['사과', '오렌지', '바나나'];

  // 문제7
  const user = {name : '김철수', age : 25, email : "kim@naver.com"}

  // 문제9
  const clickSpan = () => {
    console.log('버튼클릭');
  }

  // 문제11
  const products = [
    { id: 1, name: "노트북", price: 1200000 },
    { id: 2, name: "마우스", price: 30000 },
    { id: 3, name: "키보드", price: 80000 }
  ];

  return (
    // <> </> 는 플래그먼트로, 리액트는 HTML 작성시 
    // 반드시 부모태그가 하나만 존재해야 하므로 
    // 비어있는 태그를 사용하도록 허용한 기술이다.
    // react 는 반드시 닫는 태그 존재해야 함. -> ex) <hr/>

    <>
    {/* 문제3 */}
    {/* name: '홍길동' 정의 후 <h1> 태그에 출력하기 */}
      {/* <div className='welecome'> */}
        {/* javeScript의 class를 React 는 className 으로 사용 */}
        {/* react 에서 변수의 값을 사용하려면 반드시 {중괄호} 안에 변수 이름 입력 */}
        {/* <h1>{name}</h1>
        <img src={reactLogo} alt='샘플 랜덤 이미지'/>
      </div>

    <hr/> */}

    {/* 문제5 */}
    {/* isLoggin 변수를 이용하여 isLoggin이 true이면 '환영', 
    아니면 '로그인 하세요'가 되게 */}

    {/* <h1>{isLoggin === true ? '환영' : '로그인 하세요'}</h1>
    
    <hr/> */}

    {/* 문제6 */}
    {/* App.jsx 파일을 수정하시오 */}
    {/* 위의 fruits 배열의 모든 항목을 <ul>의 <li> 태그로 출력하라. */}
    {/* 단, map() 함수 이용할것 */}

    {/* <ul> */}
      {/* 변수명.map((인덱스명) => ({ 인덱스명 })) */}
      {/* {fruits.map((item, index) => (

        // 리액트는 이 안에서 콘솔이 안 찍힘!
        // console.log(`각 li의 index ${index}`)

        // 배열의 순서를 알려주기 위해 key를 넣어주는것!
        <li key={index}>{item}</li>
      ))}
    </ul>

    <hr/> */}

    {/* 문제7 */}
    {/* 위의 user 객체의 정보를 여러분이 원하는 태그 안에 출력 */}
    {/* <p>유저 아이디 : {user.email}</p>
    <p>유저 이름 : {user.name}</p>
    <p>유저 나이 : {user.age}</p>

    <hr/> */}

    {/* 문제8 */}
    {/* <div style={{backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px'}}>
      <p>스타일 적용된 함수</p>
    </div>

    <hr/> */}

    {/* 문제9 */}
    {/* 버튼을 클릭하면 콘솔에 '버튼이 클릭되었습니다.' */}
    {/* <button type='button' onClick={clickSpan}>클릭</button>

    <hr/> */}

    {/* 문제10 */}
    {/* 컴포넌트분리: UserCard 컴포넌트를 만들고 App에서 사용하세요 */}
    {/* UserCard 안의 name 과 age 는 일명 매개변수이다. */}
    {/* <UserCard name='홍길동' age={20} />
    <UserCard name='개나리' age={15} />
    <UserCard name='진달래' age={35} />

    <hr/> */}

    {/* 문제11 */}
    {/* 배열객체렌더링: products 배열의 모든 상품을 카드형태로 출력하세요. */}
    {/* {products.map((item, index) => (
      // key 에서 index를 사용하지 않고 item.id 를 사용해도 된다!
      <div key={index} style={{
        border: '1px solid #9131ffff', 
        padding: '15px', 
        margin: '10px', 
        borderRadius: '5px'
      }}>
        <h3>{item.name}</h3>
        <span>가격 : {item.price.toLocaleString()}원</span>
      </div>
    ))}

    <hr/> */}

    {/* <Welecome name= '개나리'/> */}

    {/* <UserCard02 name= '개나리' age= {18} city= '서울' />
    <UserCard02 name= '김백합' age= {40} city= '경기' />
    <UserCard02 name= '최영숙' age= {25} city= '인천' /> */}

    {/* <Product item = '노트북' price= {120000} />
    <Product item = '마우스' price= {15000} /> */}


    {/* <Props06 now='error' messages= '오류 발생!'/>
    <Props06 now='success' messages= '성공!'/>
    <Props06 now='none01' messages= '알림'/>
    <Props06 now='none02' messages= '경고'/> */}

    <JellyCatApp />
    {/* <ShopApp /> */}
    </>
  )
}

// export 는 App 컴포넌트를 밖으로 내보낸다.
// ┖> App를 default값으로!
export default App
