import React, {useEffect, useState} from "react";

export default function Eff06(){
    // 사용자의 목록을 담을 변수
    const [user, setUser] = useState([])
    useEffect(() => {
        // 1. fetch()를 이용해서 컴포넌트가 처음 랜더링 될 때 실행되게 JSON을 가지고 옴
        fetch('https://jsonplaceholder.typicode.com/users')

        // 2. 서버에서 응답(Response)을 받으면 JSON 으로 변환
        .then(res => res.json())

        // 3. 변환한 데이터를 serUser()로 상태 변환하여 저장
        .then(data => setUser(data))
    }, [])  // 4. 마운트시 1회만 실행되도록 의존성 빈배열 사용
    console.log(user)

    return(
        <>
        <ul>
            {user.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
        </>
    )
}