import React,{useState} from "react";

export default function ChangeImg02(){
    const [img, setImg] = useState("/images/tree-4.jpg")
    const [hover, setHover] = useState(false)


    return(
        <>
        <img src={hover ? '/images/tree-4.jpg' : '/images/tree-5.jpg'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} alt="people" />
        </>
    )
}