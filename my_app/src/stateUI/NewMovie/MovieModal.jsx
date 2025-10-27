export default function MovieModal(props){
    
    return(
        // 모달 -> 투명 오버레이 위테 모달 출력 되도록
        <div style={{
            position: 'fixed', 
            top: '0', 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                width: '300px'
            }}>
                <h4>{props.selectMovie.title}</h4>
                <p>{props.selectMovie.review === '' ? '작성된 리뷰가 없습니다' : props.selectMovie.review}</p>
                <button type="button" onClick={props.onClose}>닫기</button>
            </div>
        </div>
    )
}