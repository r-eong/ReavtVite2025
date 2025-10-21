// import React, {useState} from "react";

export default function Props06(props){

    // const [type, setType] = useState(0)

    // const typeAlert = props.now === 'error' ? Alert='오류' : 'success' ? Alert='성공' : '알림/경고'

    return(
        <>
        <div>
            <button 
            style={{
                width: '120px',
                height: '60px',
                margin: '5px',
                color: 'white',
                backgroundColor: props.now === 'error' ? 'red' : props.now === 'success' ? 'green' : 'blue'}}>
                {props.messages}
            </button>
        </div>
        </>
    )
}