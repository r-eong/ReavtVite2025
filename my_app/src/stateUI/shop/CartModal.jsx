export default function CartModal(props){
    return(
        <>
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

            <h3>장바구니</h3>
            {/* cart.length 가 0이면 비어있습니다. 아니면 랜더 */}
            {props.cart.length === 0 ? <p>비어있습니다.</p> : 
                <ul>
                    {props.cart.map((cartItem) => (
                        <li key={cartItem.id}>
                            <span>{cartItem.name} - {cartItem.quantity}</span>
                        </li>
                    ))}
                </ul>}
                <button type="button" onClick={props.onClose}>닫기</button>
            </div>
        </div>
        </>
    )
}