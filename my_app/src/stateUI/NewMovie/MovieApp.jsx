import React, {useState} from "react";

import MovieList from "../NewMovie/MovieList";
import MovieModal from "../NewMovie/MovieModal";

export default function NewMovie(){
    // 배열에 이미 0번 위칭 빈 옵젝트가 생성된 관계로 
    // 랜더가 되면서 무조건 빈 그림이 그려진다
    // 예외처리도 이미 랜더가 되고 난 후라서 의미가 없다
    // 리액트에서는 useState([{}]) 사용하지 말자
    // const [movie, setMovie] = useState([{}])

    // 영화 제목, 리뷰 담는 변수
    const [movie, setMovie] = useState([])
    // 선택한 영화가 없으면 null
    const [selectMovie, setSelectMovie] = useState(null)
    // 영화 제목 담는 변수
    const [title, setTitle] = useState('')
    // 영화 리뷰 담는 변수
    const [review, setReview] = useState('')

    // 영화제목, 리뷰가 같이 저장되는 오브젝트 배열에 
    // 입력한 데이터가 삽입되는 함수 생성
    const addMovie = () => {

        // title 이 빈값이면 return 으로 종료
        if(title === '') return;

        // 얕은복사
        const movieCopy = [...movie]

        // movie = [{}] 삽입
        // 오브젝트 = {key: value, key:value, .........}
        // 오브젝트는 반드시 id: movie.length 로 -> 삭제 이슈
        // 삭제 이슈 없이 작성하길 원하면 if: Date.now()
        movieCopy.push({
            id: movie.length,
            title: title,
            review: review
        })

        // 반드시 setMovie() 를 통해 엡데이트를 해야 재 렌더링이 된다
        setMovie(movieCopy)

        // title, review 의 input 에 입력되고 난 후 입력된 글자 비우기
        setTitle('')
        setReview('')
    }

    return(
        <>
        <div>
            <h2>영화 리뷰 관리 앱 🎬</h2>
            <input type='text' placeholder="영화 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='text' placeholder="영화 리뷰" value={review} onChange={(e) => setReview(e.target.value)} />
            <button type="button" onClick={addMovie}>추가</button>

            {/* 자식 컴포넌트 태그로 가져오기 */}
            <MovieList 
            // 영화 목록 출력을 위해 movie, setSelectMovie props로 전달
            movie = {movie}
            setSelectMovie = {setSelectMovie} />

            {/* 모달 열림/닫힘
                selectMovie != null 아니면 모달 출력,
                아니면 null, 리액트에서 null 은 빈값이 아닌 아무것도 랜더되지 않는 상태 */}
                {selectMovie != null ? <MovieModal selectMovie = {selectMovie} onClose ={() => setSelectMovie(null)} /> : null}
        </div>
        </>
    )
}