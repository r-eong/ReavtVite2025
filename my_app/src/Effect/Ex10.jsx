import React, {useState, useEffect} from "react";

export default function Ex10(){
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { id: 4, name: 'David', email: 'david@example.com' }
    ]
    const [inputText, setInputText] = useState('')
    // filter 한 목록을 담아주는 상태변수
    // 배열이름.filter((요소, 인덱스, 원본배열) => {return 조건})
    // 조건에 만족하는 데이터를 추출해서 새로운 배열 반환한다
    // 조건에 만족하지 않으면 빈배열을 반환한다
    const [filterList, setFilterList] = useState([])

    useEffect(() => {
        // 예외처리 - inputText 에 스페이스바만 쳤을 때 아무일도 일어나지 않게 함!
        // trim() -> 왼쪽, 오른쪽 공백 제거 -> true, false
        // 문자가 입력되어있으면 : true
        // 문자가 입력되어있지 않으면 : false
        if(!inputText.trim()){
            setFilterList(users)
            return
        }
        const resultFilter = users.filter((user) => 
            user.name.toUpperCase().includes(inputText.toUpperCase())
            || user.email.toUpperCase().includes(inputText.toUpperCase())
        )
        setFilterList(resultFilter)
    }, [inputText])

    const inputHandeler = (e) => {
        setInputText(e.target.value)
    }

    return(
        <>
        <h2>간단 사용자 검색</h2>
        <input type="text" onChange={inputHandeler} value={inputText} placeholder="이름 또는 이메일 검색" />

        <ul>
            {filterList.map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong> ({user.email})
                </li>
            ))}
        </ul>
        {filterList.length === 0 && <p>검색 결과가 없습니다.</p>}
        </>
    )
}