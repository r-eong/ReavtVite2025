import React, {useState} from "react";
import MovieModal from "./MovieModal";

// 영화 리스트
export default function MovieList({reviews, selectIndex, setModalOpen, modalOpen, setselectIndex}){
    console.log(reviews)
    return(
        <div className="MovieList">
           {reviews.length > 1 && 
              <ul style={{listStyle: 'none', padding: '0 20px'}}>
                {reviews.map((item, index) => (
                    <li key = {index} 
                    style={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0', 
                    height: '50px', display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                    {/* 제목 */}
                    <h4>{item.title}</h4>
                    <button 
                    onClick={() => {setModalOpen(true);setselectIndex(index);}} 
                    style={{padding: '7px', borderRadius: '5px', backgroundColor: '#E6E6FA'}}>
                        상세보기
                    </button>
                    </li>
                ))}
            </ul>
           } 
            

        {/* 모달 */}
        {modalOpen && <MovieModal 
        review={reviews[selectIndex]}
        closeModal={() => setModalOpen(false)}
        />}
        </div>
    )
}