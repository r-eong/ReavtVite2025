import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        <h2>여기는 홈페이지</h2>
        <Link to='/about'>About 페이지</Link>
        </>
    )
}