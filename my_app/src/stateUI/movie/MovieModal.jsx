import React, {useState} from "react";

// 선택한 영화 상세정보 모달창
export default function MovieModal({review, closeModal}){
    return(
        <>
        <div 
        className="modal" 
        style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', padding: '20px',
        height: '180px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '10px', zIndex: '100'}}>
            <div>
                <h4>{review.title}</h4>
                <p>{review.comment ? review.comment : '작성된 리뷰가 없습니다'}</p>
                <button onClick={closeModal} style={{padding: '7px', borderRadius: '5px', backgroundColor: '#8A2BE2', color: '#fff'}}>닫기</button>
            </div>
        </div>
        <div style={{backgroundColor: 'rgba(0,0,0,0.7)', position: 'absolute', top: '0', left: '0',
            width: '100%', height: '100%', zIndex: '50'}}></div>
        </>
    )
}