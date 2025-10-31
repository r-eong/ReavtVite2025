import { useState, useEffect } from "react";

export default function ExJ03(){
    const [datas, setDatas] = useState([])
    const [errMsg, setErrMsg] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/postss')
        .then((res) => {
            if(!res.ok){
                throw new Error(`HTTP error : ${res.status}`)
                // ┖> GET https://jsonplaceholder.typicode.com/postss 404 (Not Found) 
                //    에러 발생 Error: HTTP error : 404 가 나옴!
            }
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setDatas(data)
        })
        .catch((err) => {
            console.log('에러 발생', err)
            setErrMsg(err.massege)
        })
        .finally(() => {
            console.log('요청완료')
            setLoading(false)
        })
    }, [])

    if(errMsg){
        return <p>데이터 요청 실패! {errMsg}</p>
    }
}