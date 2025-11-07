// 설치한 react-daum-postcode 를 import 해야 주소 검색 사용 가능
import DaumPostCode from 'react-daum-postcode'
import { useState } from 'react'
import './PostCode.css'

export default function PostCode(){
    // 우편번호
    const [zipcode, setZipcode] = useState('')
    // 주소
    const [address, setAddress] = useState('')
    // 검색 버튼
    const [isOpen, setIsOpen] = useState(false)

    const completHandeler = (data) => {
        // 우편번호 검색을 도로명 또는 지역명으로 입력
        let arr = ''

        if(data.userSelectedType === 'R'){
            // 도로명 주소
            arr = data.roadAddress
        }else{
            // 지역명 주소
            arr = data.jibunAddress
        }

        setZipcode(data.zonecode)
        setAddress(arr)
        setIsOpen(!isOpen)
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <input type='text' value={zipcode} placeholder='우편번호' readOnly name='post' id='post'/>
            <input type='text' value={address} placeholder='도로명주소' name='userAddress' id='userAddress'/>
            <button type='button' id='userAddSearch' onClick={toggle}>우편번호 검색</button>
            <input type='text' placeholder='상세 주소' name='detailAddress' id='detailAddress'/>

            {/* 모달 */}
            {isOpen && 
            <div className='modalOverlay' onClick={toggle}>
                <button className='closeBtn' onClick={toggle}>x</button>
                <DaumPostCode onComplete={completHandeler} className='modal' style={{height: '600px', width: '450px'}} />
            </div>
            }
        </div>
    )
}