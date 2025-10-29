export default function CartModal(props){

    return(
        <div className="cart">
            <div className="cartModal">
                <h3>주문내역</h3>
                {props.cart.length === 0 ? <p className="nonedolls">상품을 선택해주세요.</p> : 
                <ul>
                    {props.cart.map((cartDolls, index) => (
                        <li key={cartDolls.id}>
                            <button className="xBtn" type="button" onClick={() => props.delCart(index)}>x</button>
                            <img 
                            src={`/tableImg/${cartDolls.img}`} 
                            alt={cartDolls.name}
                            ></img>
                            <span>{cartDolls.name}</span>
                            <p>{(cartDolls.price).toLocaleString()}</p>
                            <div className="bTn">
                                <button className="minBtn" type="button" onClick={() => props.downBtn(index)}>-</button>
                                <p className="quantity">{cartDolls.quantity}</p>
                                <button className="sumBtn" type="button" onClick={() => props.upBtn(index)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
                }
            </div>
            {/* <p>총 금액 <strong>{(props.totalCart).toLocaleString()} </strong>원</p> */}
            <button className="closeBtn" type="button" onClick={props.modalOn}>닫기</button>
        </div>
    )
}