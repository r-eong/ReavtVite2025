import React, {useState} from "react";

export default function Exstate03(){
    const [box, setBox] = useState('orange')
    
    const changeBtn = () => setBox(box === 'orange' ? 'skyblue' : 'orange')
    
    return(
        <>
        <div style={{
            width: '200px',
            height: '200px',
            backgroundColor: box
        }}>
            <button onClick={changeBtn}>색 변경</button>
        </div>
        </>
    )
}