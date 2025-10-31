import { useState, useEffect } from "react";

export default function ExJ05(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
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
        }, 3000)
    }, [])

    if(loading){
        return <p>불러오는중...</p>
    }

    return(
        <>
        <ul>
            {data.map((data) => (
                <li key={data.id}>
                    {data.name}
                </li>
            ))}
        </ul>
        </>
    )
}