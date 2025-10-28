import React,{useState} from "react";

export default function ChangeImg03(){
    const imgs = [
        '/images/coffee-gray.jpg',
        '/images/coffee-blue.jpg',
        '/images/coffee-pink.jpg',
    ]
    const [index, setIndex] = useState(0)

    // index 번호가 2가되면 다시 0으로 돌아와 순환하는 함수
    const changeIndex = () => {
        // if(index < imgs.length-1){
        //     setIndex(index + 1)
        // }else{
        //     setIndex(0)
        // }
        // 위아래같은뜻임
        // index 가 0 일때 3(=imgs.length) 으로 나누면, 나머지는 0
        // index 가 1 일때 3(=imgs.length) 으로 나누면, 나머지는 1
        // index 가 2 일때 3(=imgs.length) 으로 나누면, 나머지는 3
        // index 가 3 일때 3(=imgs.length) 으로 나누면, 나머지는 0
        setIndex((index + 1) % imgs.length)
    }

    return(
        <>
            <img src={imgs[index]} onClick={changeIndex} alt="커피사진"/>
        </>
    )
}