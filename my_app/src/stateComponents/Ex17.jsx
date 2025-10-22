import React, {useState} from "react";

export default function Exstate17(){
    const [change, setChange] = useState(10);
    const [colors, setColor] = useState('black');

    function change_color(){
        setChange(change + 10)
        setColor(colors === 'black' ? 'red' : 'black')
    }
    
    return(
        <>
        <p style={{
            fontSize: change,
            color: colors
            }}>
            변하는 글자!
        </p>
        <button onClick={change_color}>변화!</button>
        </>
    )
}