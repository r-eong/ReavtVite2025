import React, {useState, useEffect, use} from "react";

export default function ExJ01(){
    // 1. 상태변수 유무 생각
    // 2. useEffect 를 어디 사용할건지
    // 3. UI 어떻게 출력할건지
    // 4. 컴포넌트 분리 유무도 생각
    // 5. JSON 을 이용해 데이터를 가져오기 해야하는 상황도 고려.
    // 6. 상태변수를 사용하는 경우 useState(초기값)을 생각

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [errMsg, setErrMsg] = useState(null)
    // userId 파라미터 상태를 저장하는 변수 필요
    const [userId, setUserId] = useState(1)
    // user 를 userId 에 해당하는 부분만 출력되도록 물어보는 상태변수
    // const [user, setUser] = useState(null)

    const JSONdata = () => {
        console.log('데이터 요청 시작')
        // JSON의 URL 부분 파라미터 형식으로 userId 을 가져온다
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        // res의 원문 = response(요청하다) 객체. 이미 리액트에 존재한다.
        // res 는 줄임말. 약속같은 의미
        .then((res) => {
            if(!res.ok){
                throw new Error(`HTTP srror starus : ${res.status}`)
            }

            return res.json()
        })

        // res.json() 이 넘겨준 데이터를 받아 setData에 저장함
        .then((data) => {
            console.log('가져온 데이터', data)
            setData(data)
        })

        .catch((err) => {
            console.log('에러 발생', err)
            setErrMsg(err.message)
        })

        // json에서 가져오는 데이터가 실패하든, 성공하든 상관없이 무조건 출력
        .finally(() => {
            // 콘솔만 찍어도 됨!
            console.log('요청완료')
            setLoading(false)
        })
    }

    useEffect(() => {
        // useEffect 에 들어가는 식이 너무 길 때엔 이렇게 사용해도 됨!
        JSONdata()
    }, [userId])

    if(loading){
        return(
            <p>데이터 불러오는 중...</p>
        )
    }

    if(errMsg){
        return(
            <p>에러 : {errMsg}</p>
        )
    }

    // 핸들러 함수란?
    // 본인 혼자 아무것도 할 수 없는 함수
    // 누군가가 이벤트로 핸들러 함수를 사용해야 비로소 실행되는 함수
    const idCountHandeler = () => {
        setUserId(userId + 1)
    }

    return(
        <>
        <h2>현재 사용된 사용자 ID :</h2>
        <p>{userId}</p>
        <button type="button" onClick={idCountHandeler}>다음 사용자 보기</button>

        {/* user 에 값이 존재하면 그리기 */}
        {/* user 의 값이 null <div> 태그를 그리지 않는다 */}

        {/* 실행이 되긴 하지만 문접적으로 오류있는 코드임! */}
        <h4>{data.name}</h4>
        <p>{data.email}</p>
        </>
    )
}