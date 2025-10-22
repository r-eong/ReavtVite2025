import React, {useState} from "react";

export default function Exstate07(){
    const [changeColor, setchangeColor] = useState('red')
    
    return(
        <>
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: changeColor
        }}></div>
        <button onClick={() => setchangeColor(changeColor === 'red' ? 'green' : changeColor === 'green' ? 'blue' : 'red')}>다음 색상</button>
        </>
    )
}