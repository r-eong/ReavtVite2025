import React, {useState} from "react";

export default function Hover03(){
    // isOpen 가 false 면 메뉴가 안 보이는 상태
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
        style={{position: 'relative', display:'inline-block'}}
        >
        <button>메뉴</button>
        {/* {isOpen && */}
        <ul style={{
            display: isOpen ? 'block' : 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '150px'
        }}>
            <li>항목1</li>
            <li>항목2</li>
            <li>항목3</li>
        </ul>
        {/* } */}
        </div>
    )
}