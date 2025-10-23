import './MovieReview.css'

import React, {useState} from "react"

export default function MovieReview(){
    // 기본 정보
    const [reviews, setReviews] = useState([
        { id:0, title: '인셉션', comment: '꿈속의 꿈! 최고였어요.', likes: 0 },
        { id:1, title: '인터스텔라', comment: '음악이 너무 웅장해요.', likes: 0 },
    ])
    // 영화 제목 입력 인풋
    const [inputTitle, setinputTitle] = useState('')
    // 영화평 입력 인풋
    const [inputText, setinputText] = useState('')

    // 글 추가
    const addReviews = () => {

        // 내용 입력하지 않았을 때 안내 창 뜨게
        if(inputTitle.trim() == ''){
            return alert('제목을 입력하세요')
        }
        if(inputText.trim() === ''){
            return alert('영화평을 입력하세요')
        }

        // 추가하는 변수 얕은 복사
        let add = [...reviews]

        // 오브젝트마다 인덱스를 부여하고 찾을 수 없어서
        add.push({
            id: reviews.length,
            title: inputTitle,
            comment: inputText,
            likes: 0
        })

        // 변경된 변수 담기
        setReviews(add)
        
        // 인풋 발행하면 인풋창에서 지워짐
        setinputTitle('')
        setinputText('')
    }

    // 글 삭제
    const delRevies = (id) => {
        // 지우는 변수 
        let del = [...reviews]

        // 버튼 누르면 리뷰 1개 삭제되게
        del.splice(id, 1)

        // 변경된 변수 담음
        setReviews(del)
    }

    // 좋아요 증가
    const addLikes = (id) => {
        // 좋아요 변수
        let like = [...reviews]

        // 누를 떄마다 좋아요 1개씩 증가
        like[id].likes += 1
        
        // 변경된 변수 담음
        setReviews(like)
    }

    return(
        <div className='container'>
            {/* 상단 리뷰 인력 전체 */}
            <div className='main'>
                {/* 타이틀 */}
                <h2>📽 나의 영화 리뷰</h2>

                {/* 영화 제목 입력 */}
                <input onChange={(e) => setinputTitle(e.target.value)} value={inputTitle} placeholder='영화 제목' />
                
                {/* 영화평 입력 */}
                <input onChange={(e) => setinputText(e.target.value)} value={inputText} placeholder='한줄평' />
                
                {/* 등록버튼 */}
                <button onClick={addReviews}>등록</button>
            </div>

            {/* 하단 리뷰 전체 */}
            <div className='info'>
                <ul style={{listStyle: 'none'}}>
                    {reviews.map((reviews, id) => (
                        <li key = {reviews.id}>
                            {/* 제목 */}
                            <h3>{reviews.title}</h3>

                            {/* 영화평 */}
                            <p>{reviews.comment}</p>

                            {/* 좋아요 버튼 */}
                            <span onClick={() => addLikes(id)} style={{cursor: 'pointer'}}>❤ {reviews.likes}</span>

                            {/* 삭제버튼 */}
                            <button onClick={() => delRevies(reviews.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}