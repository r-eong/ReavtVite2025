import React, {useState} from "react"

export default function Blog(){
    const [posts, setPosts] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
    const [likes, setLikes] = useState([0, 0, 0])
    const [inputValue, setInputValue] = useState('')
    // 모달 창이 안보이는 상태를 false로 지정
    const [modalOpen, setModalOpen] = useState(false)
    // 선택된 글의 인덱스 지정
    const [selectedIndex, setSelectedIndex] = useState(null)

    // 좋아요 배열
    const addText = () =>{
        setLikes([...posts, posts.length + 1])
    }

    // ----------------------------------------------------------------------------

    // 실행 로직 함수
    // 글 추가 함수
    const addPost = () => {
        // 글을 입력하면 위로 추가 unshift()

        // 배열 또는 오브젝트, 오브젝트 배열은 리액트에서 useState 훅 사용시 
        // 힙의 메모리 주소가 같은지 다른지 비교하혀 랜더링 한다.
        // 고로 얕은 복사를 해야한다

        // 얕은 복사 형식 : [...배열이름]
        let postCopy = [...posts]
        
        // 예외처리 : 혹시모를 데이터의 필요없는 오류로부터 
        // 데이터가 정확하게 입력되도록 로직으로 예외를 처리
        // input 입력박은 값이 공백일 때는 추가 금지하는 코드 필요
        if(inputValue .trim() === ''){
            return alert('제목을 입력하세요')
        }

        // 위로 추가
        postCopy.unshift(inputValue)

        // setPost 를 이용해서 변수에 변경된 변수를 담아둔다
        setPosts(postCopy)

        // -------------------------
        
        // 좋아요 추가
        let likesCopy = [...likes]
        likesCopy.unshift(0)
        setLikes(likesCopy)
        
        // -------------------------

        // input 에 입력한 글이 발행버튼 클릭과 동시에 지워지는 코드
        setInputValue('')
    }

    // 글 삭제 함수
    // 삭제할 글의 인덱스 번호를 알아야함
    const delPost = (index) => {
        let postCopy = [...posts]
        let likesCopy = [...likes]
        // 배열 삭제 프로퍼티 : splice(시작위치, 삭제할 길이)
        postCopy.splice(index, 1)
        setPosts(postCopy)
        likesCopy.splice(index, 1)
        setLikes(likesCopy)
    }

    // 좋아요 증가 함수
    // 증가해야하는 index 번호 모르면 증가가 안됨
    const addLike = (index) => {
        let likesCopy = [...likes]
        // 좋아요 증가
        likesCopy[index] += 1
        setLikes(likesCopy)
    }

    // ----------------------------------------------------------------------------

    // 리액트에서 로직함수 생성 후 return 안의 태그에 지정하는 
    // 방식의 차이로 인해 랜더링 안될 수 있다
    // 1. onClick  = {addpost} : 클릭할 때 마다 실행 (정상)
    // 2. onClick = {() => addPost()} : 클릭할 때 마다 실행 (정상)
    // 3. onClick = {addPost()} : 랜더링 시 바로 실행, 일명 즉시 실행 함수

    return(
        <>
        <ul style={{listStyle: 'none'}}>

            {/* 좋아요 배열 */}
            {posts.map((posts, index) =>(

            <li key = {index} style={{border: '1px solid #999', margin: '10px 0', padding: '10px', borderRadius: '10px'}}>
                <h3 style={{cursor: 'pointer'}} onClick={() => {setModalOpen(true); setSelectedIndex(index);}}><span onClick={() => addLike(index)} >{posts} 👍 {likes[index]}</span></h3>
                <p>{new Date().toLocaleDateString()} 발행</p>
                <button onClick={() => delPost()}>삭제</button>
            </li>
            ))}
        </ul>
        <div>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="글 제목 입력"/>
            <button onClick={addPost}>글발행</button>
            {/* 자식 모달 데이터 보내기 */}
            {/* 글 제목, 글 인덱스 번호, 모달 닫기 함수, 스타일 - color */}
            {modalOpen && <Modal 
            bor = {'1px solid #333'} 
            title = {posts} 
            setposts = {setPosts} 
            index = {selectedIndex} 
            onClose = {() => setModalOpen(false)}
            />}
        </div>
        </>
    )
}






// 자식 컴포넌트 - Modal
function Modal(props){
    // update 함수 필요
    // update 조건 - 얕은복사 필요
    // 1. props.title 를 얕은 복사 
    // ┖> let titleCopy = [...props.title]
    // 2. prompt('새 제목입력, @@@)
    // ┖> titleCopy[props.index] = prompt('새 제목 입력', 'titleCopy[props.index])
    // 3. titleCopy[props.index] -> titleCopy[0] -> 남자코트 추천
    // 4. 수정한 글의 제목을 update 해야함
    // ┖> props.setPosts(titleCopy)

    const update = () => {
        let titleCopy = [...props.title]
        titleCopy[props.index] = prompt('새 제목을 입력하세요', titleCopy[props.index]) || titleCopy[props.index]
        props.setposts(titleCopy)
    }

    return(
        <>
        <div className="modal" style={{border: props.bor, padding: '20px', borderRadius: '10px'}}>
            <h4 style={{margin: '0'}}>{props.title[props.index]}</h4>
            <p>날짜 : {new Date().toLocaleDateString()}</p>
            <p>상세내용 : 여기에 내용을 넣어보세요</p>
            <button onClick={update} style={{marginRight: '10px', backgroundColor: 'dodgerblue', color: '#fff'}}>글수정</button>
            <button onClick={props.onClose} style={{backgroundColor: 'tomato', color: '#fff'}}>닫기</button>
        </div>
        </>
    )
}