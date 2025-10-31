import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 내가 만든 test12 함수를 import 로 가져오기
import Test12 from './components/test12.jsx'
import Test13 from './components/test13.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
