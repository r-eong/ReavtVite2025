// 자식 컴포넌트 모달 UI
export default function Modal(props){
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