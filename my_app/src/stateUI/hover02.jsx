import React, {useState} from "react";

export default function Hover02(){
    // isToolTip 가 false 면 툴팁이 안 보이는 상태
    const [isToolTip, setisToolTip] = useState(false)

    return(
        <div>
            <button onMouseEnter={() => setisToolTip(true)} onMouseLeave={() => setisToolTip(false)}>마우스를 올려보세요</button>
            {isToolTip && <div>도움말 메시지</div>}
            {/* 위아래 같은 뜻임! */}
            {/* {isToolTip ? <div>도움말 메시지</div> : null} */}
        </div>
    )
}