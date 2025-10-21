function Product(props){
    return(
        <div style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            padding: '20px 30px',
            margin: '10px',
            borderRadius: '10px'
            }}>
        <h3>{props.item}</h3>
        <p>가격 : {props.price.toLocaleString()}원</p>
        </div>
    )
}

export default Product