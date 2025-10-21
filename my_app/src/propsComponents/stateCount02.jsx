// useState() 훅(hook) 을 import 한다
import React, {useState} from "react";

// 한 번 함수생성 하면서 Export까지 완성
export default function Counter02(){
    // useState() 훅 을 이용하여 변수 저장
    // const [이름, set이름] = useState(초기값)
    const [count, setCount] = useState(0)  // 초기값
    // count 되는 함수
    const addCount = () => setCount(count + 1)
    // 위, 아래 같은 내용임!
    // function addCount(){
    //     setCount(count + 1)
    // }

    return(
        <>
        <div>
            <p>카운트 : {count}</p>
            {/* addCount 대신 () => setCount(count + 1)를 
            직접 넣어도 됨 */}
            <button onClick={addCount}>증가</button>
        </div>
        </>
    )
}