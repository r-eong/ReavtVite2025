import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function HomePage(){
    const {user, logout} = useContext(AuthContext)

    const navigate = useNavigate()
    
    const LogoutHandeler = () => {
        logout()
        // 로그아웃 이후 로그인 페이지로 이동
        navigate('/')
    }

    return(
        <>
        <h2>Home Page</h2>
        {user ? 
            <>
            <h2>안녕하세요{user}님!</h2>
            <button type="button" onClick={LogoutHandeler}>로그아웃</button>
            </> : <h2>로그인이 필요합니다.</h2>
        }
        </>
    )
}