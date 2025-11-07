import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WishListProvider from './wishList/wishListContext'
import ProductList from './wishList/ProductList'
import WishListPage from './wishList/WishListPage'

import LoginPage from './LoginExample/Pages/LoginPage'
import AuthProvider from './LoginExample/Context/AuthContext'
import HomePage from './LoginExample/Pages/HomePage'

import Join from './Addr/join'

function App() {
  // ProductList, WishListPage 를 선택하도록 하기 위한 상태변수
  const [showList, setShowList] = useState(false)

  return (
    <>
      {/* <WishListProvider> */}
        {/* 헤더 영역 */}
        {/* <header style={{display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#eee'}}>
          <h2>찜하기 예제</h2> */}
          {/* 찜목록보기 <-> 상품보기 */}
          {/* <button type='button' onClick={() => setShowList(!showList)}>
            {showList ? '상품보기' : '찜한 상품 보기'}
          </button>
        </header> */}
        {/* 본문 영역 */}
        {/* showList 가 true 면 wishListPage 페이지 출력 */}
        {/* showList 가 false 면 ProductList 페이지 출력 */}
        {/* {showList ? <WishListPage /> : <ProductList />}
      </WishListProvider> */}

        {/* <AuthProvider>
          <BrowserRouter>
             <Routes>
              <Route path='/' element={<LoginPage />}/>
              <Route path='/home' element={<HomePage />}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider> */}
        
    <Join />
    </>
  )
}

export default App
