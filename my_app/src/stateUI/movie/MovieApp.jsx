import React, {useState} from "react";
import MovieList from '../movie/MovieList';
// import MovieItem from "../movie/MovieItem";
import MovieModal from "../movie/MovieModal";

export default function MovieApp(){
    // 빈 항목
    const [reviews, setReviews] = useState([{}])
    // 제목 입력 인풋reviewsAdd
    const [inputTitle, setInputTitle] = useState('')
    // 리뷰 입력 인풋
    const [inputReviws,setInputReviws] = useState('')
    // 모달
    const [modalOpen, setModalOpen] = useState(false)
    // 인덱스 지정
    const [selectIndex, setselectIndex] = useState(null)
    
    
    // 리뷰 추가
    const addReview = () => {
        // 입력안했을때 안내창
        if(!inputTitle){
            return alert('제목을 입력하세요')
        }
               // 얕은복사
        let reviewsAdd = [...reviews]

        reviewsAdd.unshift({
            id: reviews.length,
            title : inputTitle,
            comment: inputReviws,
        })
        // console.log(reviewsAdd.push(inputTitle))
        // 변경 후 값 담음
        setReviews(reviewsAdd)
        // 추가버튼 누르면 인풋 비워짐
        setInputTitle('')
        setInputReviws('')
    }

    return(
        <>
        <div className="main" style={{padding: '20px', margin: '20px 0', borderBottom: '1px solid #ccc'}}>
            <h3>영화 리뷰 관리 앱 🎬</h3>
            <input type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} placeholder="영화 제목" 
            style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px'}}/>
            <input type="text" value={inputReviws} onChange={(e) => setInputReviws(e.target.value)} placeholder="리뷰" 
            style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px'}}/>
            <button onClick={addReview}
            style={{padding: '7px', borderRadius: '5px', backgroundColor: '#8A2BE2', color: '#fff'}}>
                추가
            </button>
        </div>

        {/* 영화목록 */}
        <MovieList 
        reviews = {reviews} 
        title = {inputTitle} 
        setselectIndex = {setselectIndex} 
        setModalOpen = {setModalOpen} 
        modalOpen = {modalOpen}
        selectIndex = {selectIndex}
         />
        </>
    )
}