// 내가 만든 UserContext 를 import 한다
// useContext() 훅을 import 한다 -> 그래야 부모에서 보낸 데이터 꺼낼 수 있음
import { UserContext } from "../Usercontext";  // 내가 생성한 저장소
import { useContext } from "react";  // react 라이브러리 훅

export default function profile(){
    // useContext 로 값 꺼내서 사용
    return(
        <div>
            <p>현재 사용자 : {}</p>
            <button type="button" onClick={}>이름 바꾸기</button>
        </div>
    )
}