// 부모 MovieList 자식
// MovieApp 의 손자

export default function MovieItem(props){
    return(
        <>
        <li>
            {/* MovieItem 이 부모로부터 물려받은 데이터는 movie이다
            movie = [{id: value, title: value, review: value}] */}
            {props.movie.title}
            <button type="button" onClick={() => props.setSelectMovie(props.movie)}>상세보기</button>
        </li>
        </>
    )
}