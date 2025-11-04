import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './commom/header/Header'
import Footer from './commom/footer/footer'
import MealsData from './api/mealsData'
import Home from './pages/Home/home'
import List from './pages/List/List'
import Difficulty from './pages/Difficulty/Difficulty'
import ReviewCount from './pages/ReviewCount/ReviewCount'
import Detail from './pages/Detail/Detail'

import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  const data = MealsData();

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/List' element={<List data={data} />} />
          <Route path='/Difficulty' element={<Difficulty data={data} />} />
          <Route path='/ReviewCount' element={<ReviewCount data={data} />} />
          <Route path='/Detail/:id' element={<Detail data={data} />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
