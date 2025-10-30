import React, {useState, useEffect} from "react";

export default function Ex09(){
    // input 입력을 담는 상태변수
    const [messages, setMessages] = useState('')
    // 입력하는 메시지가 여러개 담기는 상태변수
    const [send, setSend] = useState([])

    const addMsg = () => {
        if(messages.trim() === ''){
            return
        }

        const add = [...send]
        add.push({id: messages.length, messages: messages})
        setSend(add)
        setMessages('')
        // console.log(add)
    }

    const inputHandeler = (e) => {
        setMessages(e.target.value)
    }

    useEffect(() => {
        if(send.length > 0){
            // 마지막에 입력된 메시지 출력시킴
            let lastMsg = send[send.length - 1].messages
            console.log('새 메시지 : ' + lastMsg)
        }
    },[send])

    return(
        <>
        <h2>간단 메시지 입력기</h2>
        <input type="text" onChange={inputHandeler} value={messages} placeholder="메시지를 입력하세요" />
        <button type="button" onClick={addMsg}>전송</button>

        <ul>
            {send.map((msg, index) => (
                <li key={index}>
                    {msg.messages}
                </li>
            ))}
        </ul>
        </>
    )
}