export default function FoodList(props){
    return(
        <div>
            <ul style={{listStyle: 'none', padding: 0}}>
                {props.foods.map((food) => (
                    <li key = {food.id} 
                    style={{
                        padding: '5px 20px', 
                        margin: '10px 0',
                        backgroundColor: '#f7e7e7ff', 
                        borderRadius: '10px', 
                        border: '1px solid #e0c7c7ff',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '300px',
                        }}>
                        <h4>{food.name} - {food.price}</h4>
                        <button 
                        type="button" 
                        onClick={() => props.addCart(food)} 
                        style={{
                            height: '40px',
                            backgroundColor: '#fcf2f2ff',
                            color: '#d61e1eff'
                        }}>담기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}