import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className="Header">
            <Link to='/'><h3>🍄 mushroom store</h3></Link>
            <div>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/Cart'><h4>Cart</h4></Link>
                <Link to='/Login'><h4>로그인</h4></Link>
            </div>
        </div>
    )
}