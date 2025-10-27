import ProductItem from "./ProductItem";

export default function ProductList(props){
    return(
        <>
        <ul>
            {props.products.map((product) =>(
                <ProductItem 
                key = {product.id} 
                product = {product}
                addCart = {props.addCart} />
            ))}
        </ul>
        </>
    )
}