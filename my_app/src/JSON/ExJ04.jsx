import { useState, useEffect } from "react";

export default function UserList(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setData(data)
        })
        .finally(() => {
            console.log('요청완료')
            setLoading(false)
        })
    }, [])
    return(
        <ExJ04 data = {data} />
    )
}

function ExJ04(props){
    return(
        <>
        <h2>컴포넌트 분리 연습</h2>
        <ul>
            {props.data.map((data) => (
                <li key={data.id}>
                    {data.name}
                </li>
            ))}
        </ul>
        </>
    )
}