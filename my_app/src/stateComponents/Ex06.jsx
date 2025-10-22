import React, {useState} from "react";

export default function Exstate06(){
    const [sizeUp, setsizeUp] = useState(20)
    
    return(
        <>
        <p style={{fontSize: sizeUp}}>
            커지는 글씨!
        </p>
        <button onClick={() => setsizeUp(sizeUp + 10)}>
            크게
        </button>
        </>
    )
}