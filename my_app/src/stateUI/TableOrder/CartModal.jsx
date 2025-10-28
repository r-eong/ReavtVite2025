export default function CartModal(props){
    return(
        <div className="cart">
            <div className="cartModal">
                <h3>주문내역</h3>
                {props.JellyCat.length === 0 ? <p>비어있습니다.</p> : 
                <ul>
                    {props.cart.map((cartDolls) => (
                        <li key={cartDolls.id}>
                            <img 
                            src={`/tableImg/${cartDolls.img}`} 
                            alt={cartDolls.name}
                            ></img>
                            <span>{cartDolls.name}</span>
                            <p>{cartDolls.price}</p>
                        </li>
                    ))}
                </ul>
                }
                <button type="button" onClick={props.modalOn}>닫기</button>
            </div>
        </div>
    )
}