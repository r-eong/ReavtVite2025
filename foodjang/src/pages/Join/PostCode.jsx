import DaumPostCode from 'react-daum-postcode'
import { useState } from 'react'
import './PostCode.css'

export default function PostCode(){
    const [zipcode, setZipcode] = useState('')
    const [address, setAddress] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const completHandeler = (data) => {
        let arr = ''
        
        if(data.userSelectedType === 'R'){
            arr = data.roadAddress
        }else{
            arr = data.jibunAddress
        }

        setZipcode(data.zonecode)
        setAddress(arr)
        setAddress(!isOpen)
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className='postModal'>
            <input type='text' value={zipcode} placeholder='우편번호' readOnly name='post' id='post'/>
            <input type='text' value={address} placeholder='도로명주소' name='userAddress' id='userAddress'/>
            <button type='button' id='userAddSearch' onClick={toggle}>
                <img src="ico_sch.png" alt="주소검색"/>
                우편번호 검색
            </button>
            <input type='text' placeholder='상세 주소' name='detailAddress' id='detailAddress'/>

            {isOpen && 
                <>
                <div className='modal' onClick={toggle}>
                    <button type='button' onClick={toggle}>x 닫기</button>
                    <DaumPostCode onComplete={completHandeler} style={{height: '600px'}} />
                </div>
                <div className='overlay'></div>
                </>
            }
        </div>
    )
}