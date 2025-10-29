import React, {useEffect, useState} from "react";

export default function Eff08(){
    // 사용사 목록 담는 함수
    const [user, setUser] = useState([])
    // 버튼 클릭으로 새로고침/재요청 제어할 상태 변수
    const [reload, setLeload] = useState(false)
    // 데이터를 불러오는 중인지 여부를 확인할 상태 변수
    const [isload, setIsload] = useState()
    // const [time, setTime] = useState('로딩중...')

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            // 가져온 데이터를 user 상태에 저장
            setUser(data); 
        })

        setTimeout(() => {
            // 로딩 시작상태 변경
            setIsload(true)
            // 로딩 완료 상태로 변경
            setIsload(false);
        }, 3000)

        // reload 가 값이 바뀔 때 마다 useEffect 재실행
        // 다시말해, reload가 변경될 때 마다 데이터를 다시 불러옴
    }, [reload])
    console.log(user)

    return(
        <>
            <button type="button" onClick={() => {setLeload(!reload); setIsload(true)}}>다시 불러오기</button>
            {isload ? <p>로딩중...</p> : 
                <ul>
                    {user.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}