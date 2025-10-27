export default function ProductItem(props){

    return(
        <>
        <li>
            <span>{props.product.name} - {props.product.price}원</span>
            <button type="button" onClick={() => props.addCart(props.product)}>담기</button>
        </li>
        </>
    )

}