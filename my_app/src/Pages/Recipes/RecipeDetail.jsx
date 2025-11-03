import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import '../Recipes/Recip.css'

export default function RecipeDetail({data}){
    const {id} = useParams()

    const item = data.find((data) => data.id === Number(id))

    return(
        <div className="detail">
            <div className="detail01">
                <h2>레시피 상세</h2>
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} />
            </div>
            <div className="detail02">
                <h3>요리 유형 : {item.cuisine}</h3>
                <h3>난이도 : {item.difficulty}</h3>
                <h3>서빙 수 : {item.servings}</h3>
                <h3>칼로리 : {item.caloriesPerServing}</h3>
                <h3>평점 : {item.rating}</h3>
                <h3>조리 방법</h3>
                <p>{item.instructions}</p>
                <Link to='/'>목록으로 돌아가기</Link>
            </div>
        </div>
    )
}