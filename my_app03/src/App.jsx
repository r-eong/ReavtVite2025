import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './ReduxEx/Counter'
// import Counter from './ReduxToolkit/counter'
import Cart from './cartEx/Cart'
import Test from './test'

import Header from './components/Header'
import Footer from './components/Footer'
import Section from './Pages/Section'
import CartPage from './Pages/CartPage'

import LoginCookie from './Cookie/LoginCookie'

import CookieModal from './Cookie/CookieModal'

import GoogleCalendar from './calenderTest/calender'
import MyCalendar from './calenderTest/calender'
import MyFullCalendar from './calenderTest/full'

import ReservationCalendar from './calenderTest/ReservationCalendar'

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/Cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      {/* <LoginCookie /> */}
      {/* <CookieModal /> */}
      {/* <GoogleCalendar /> */}
      {/* <MyCalendar /> */}
      {/* <MyFullCalendar /> */}
      <ReservationCalendar />
    </>
  )
}

export default App
