import MovieItem from "./MovieItem"

// MovieApp 의 자식
export default function MovieList(props){
    return(
        <div>
            <ul>
                {/* li 반복을 위해 map() 이용 */}
                {props.movie.map((movie) => (
                    // 자식인 MovieItem 를 태그로 가져온다
                    // li 태그는 MovieItem 에 그림
                    <MovieItem 
                    key = {movie.id} 
                    movie = {movie}
                    setSelectMovie = {props.setSelectMovie} />
                ))}
            </ul>
        </div>
    )
}