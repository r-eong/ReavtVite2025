import { useState } from "react";
// 내가 만든 저장소 import
import { UserContext } from "./Context/Usercontext";
import Header from "./Context/component/Header";

// 부모 컴포넌트
// 공유하고 데이터를 상태변수로 지정
export default function UserApp(){
    // useState 이름 저장
    // 전역변수
    const [username, setUsername] = useState('홍길동')

    // provider 로 감싸서 전역의 데이터값을 전달
    return(
        <UserContext.Provider value={{username, setUsername}}>
            
        </UserContext.Provider>
    )
}