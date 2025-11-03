import React, {useState, useEffect, use} from "react";

export default function Exfatch(){
    // 1. 상태 변수
    // 로딩중 표시
    // 현재 loading = true : 로딩중 -> loading = false : 로딩 종료. 
    // 종료를 안 하면 계속 로딩중이 됨
    const [loading, setLoading] = useState(true)
    // 가져온 데이터 저장
    const [data, setData] = useState([])
    // 에러 메세지 저장
    const [errMsg, setErrMsg] = useState(null)

    useEffect(() => {
        console.log('데이터 요청 시작')
        fetch('https://jsonplaceholder.typicode.com/users')

        // res 는 response 객체의 약어. 이미 리액트의 객체로 존재
        .then((res) => {
            // 상태가 정상이면 true, 상태가 정상이 아니면 false 반환
            // res.ok = true
            // res.ok 는 boolean 데이터 타입.
            // boolean 은 오직 true, false 만 가질 수 있다.
            // res.ok 와 catch() sms 세트임! 
            // 둘중 하나라도 안 쓰면 나머지도 안 써야됨!
            if(!res.ok){
                // HTTP 상태의 코드 확인
                // res.status 를 쓰면 404, 500 ~ 이런 게 뜨고 
                // res.ok 를 쓰면 true, false 가 나옴!
                // 둘 다 써도 된다는 뜻!
                throw new Error(`HTTP error status : ${res.status}`)
                // throw new Error('HTTP error status : ', res.status)
                // ┖> ( 인수1 , 인수2 ) 이 방식으로 작성할 경우 인수가 2개로 인식되어 
                // 동작방식 때문에 문제가 생김. `빽틱`을 사용하던가 ,를 사용하지 않고 하나씩 작성하기
            }
            
            // JSON 파싱(해석)
            return res.json()
        })

        .then((data) => {
            // 지금 불러온 데이터는 이 부분에만 존재
            console.log('가져온 데이터', data)
            // console.log(`가져온 데이터 ${data}`)
            // ┖> 이렇게 작성할 경우 콘솔에 [object], [object] ... 로 출력됨
            // 배열 또는 객체{}는 문자열로 바꾸어 출력하려고 함.
            // .toStrong() 자바스크립트가 가지고 있는 메서드 객체.
            // Array 나 Object 의 기본 toString() 은 
            // 사람이 알아볼 수 없는 형태 [object] 형태로 출력한다.
            // 고로, 여기서는 ( 인수1 , 인수2 ) 형태로 작성하여 출력한다.
            setData(data)  // 상태를 저장
        })

        // err을 catch 함 
        // catch 는 res.ok 의 에러 체크 부분이 없으면 출력되지 않음
        .catch((err) => {
            console.log('X 에러 발생', err)
            // 에러 상태를 저장
            // .messages response 객체가 가지고 있는 메서드
            setErrMsg(err.message)
        })

        // 실패하든 성공하든 무조건 실행
        .finally(()=> {
            console.log('요청 완료')
            // trus 를 false 로 바꾸면서 로딩 종료
            setLoading(false)
        })
    }, [])  // 빈 의존객체의 배열을 이용해 한 번만 실행되게 함

    // 2. 화면 표시
    // 불러오는중... 출력 - 조건 : loading = true
    if(loading){
        return <p>데이터 불러오는 중...</p>
    }
    // 에러 출력
    if(errMsg){
        return <p>X 에러 : {errMsg}</p>
    }

    return(
        <>
        <h2>사용자 목록</h2>
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