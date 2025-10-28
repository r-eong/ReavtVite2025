import React,{useState} from "react";

export default function ChangeImg01(){
    // 리액트에서 배포 빌드 jsx -> js 빌드
    // vite => 빌드 방식
    // piblic -> images :images 폴더만 배로됨
    // ./public/images/girl.png <- XXX
    // /images/girl.png <- OOO
    const [img, setImg] = useState("/images/girl.png")
    const [toggle, setToggle] = useState(false)

    // 이미지를 토글 형식으로 변경하는 함수
    const ChangeImg = () => {
        toggle === false ? setImg('/images/boy.png') : setImg('/images/girl.png')
        setToggle(!toggle)
    }

    return(
        <>
        <img src={img} alt="people" />
        <button onClick={ChangeImg}>이미지변경</button>
        </>
    )
}