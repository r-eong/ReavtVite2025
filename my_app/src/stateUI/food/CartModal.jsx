export default function CartModal(props){
    // for문을 이용해야 콘솔에 찍어볼 수 있음
    for(let i=0; i<props.cart.length; i++){
        console.log(`id ${props.cart[i].id}`)
        console.log(`name ${props.cart[i].name}`)
        console.log(`price ${props.cart[i].price}`)
        console.log(`quantity ${props.cart[i].quantity}`)
    }

    // 수량 감소 버튼
    const downBtn = (index) => {
        if(props.cart[index].quantity > 0){
            props.cart[index].quantity - 1
            console.log(props.cart[index].quantity)
        }
    }
    // 수량 증가 버튼
    const upBtn = (index) => {
         if(props.cart[index].quantity >= 10){
             alert('10개 이하로 선택해주세요')
        }else{
            props.cart[index].quantity += 1
        }
        console.log(props.cart[index].quantity)
    }

    return(
        // 전체 / 배경 오버레이
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
            {/* 목록 */}
            <div style={{
                backgroundColor: 'white',
                padding: '5px 0',
                borderRadius: '10px',
                width: '400px'
            }}>
                <h3>장바구니 🛒</h3>
                {props.cart.length === 0 ? <p>장바구니가 비었습니다.</p> : 
                <ul style={{listStyle: 'none', padding: '10px 30px',}}>
                    {props.cart.map((cartItem, index) => (
                        <li key={index} 
                        style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            padding: '5px', 
                            margin: '10px 0',
                            backgroundColor: '#f7e7e7ff', 
                            borderRadius: '10px', 
                            border: '1px solid #e0c7c7ff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // width: '300px',
                        }}>
                            {/* 상품 이름 */}
                            <span style={{paddingLeft: '20px'}}>{cartItem.name}</span>

                            {/* 버튼 전체 */}
                            <div style={{display: 'flex'}}>
                                {/* - */}
                                <button 
                                onClick={downBtn}
                                type="button" 
                                style={{backgroundColor: 'transparent', color: '#d61e1eff'}}>
                                    <strong>-</strong>
                                </button>

                                {/* 수량 */}
                                <p style={{width: '30px'}}>{cartItem.quantity}</p>

                                {/* + */}
                                <button 
                                onClick={() => upBtn(index)}
                                style={{backgroundColor: 'transparent', color: '#d61e1eff'}}>
                                    <strong>+</strong>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                }
                {/* 닫기 */}
                <button type="button" onClick={props.onClose} style={{backgroundColor: '#d61e1eff', color: 'white', marginBottom: '15px'}}>닫기</button>
            </div>
        </div>
    )
}