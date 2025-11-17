import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { addCart } from "../Store02/cartSlice";
import { setProducts } from "../Store02/productSlice";

import './Section.css'

export default function Section(){
    // const [data, setData] = useState([])
    const {items} = useSelector((state) => state.list)

    const dispatch = useDispatch()

    useEffect(() => {
        const load = async() => {
            try{
                const res = await axios.get('https://dummyjson.com/products')
                console.log('확인')
                console.log(res.data.products)
                dispatch(setProducts(res.data.products))
            }catch(error){
                console.log('데이터 호출 실패')
                console.log(error)
            }finally{
                console.log('요청완료')
            }
        }
        // axios는 작석한 함수를 반드시 호출해야함
        load();
    }, [dispatch])   // 비워도 되고 dispatch 써도 됨!

    // 장바구니에 삼풍이 클릭되어 담길 때 마다 alert 창 띄우기
    const addCartHandeler = (item) => {
        dispatch(addCart(item));
        alert(`${item.title}이(가) cart에 추가 되었습니다`);
    }

    return(
        <div className="Section">
            <h2>상품목록</h2>
            <ul>
                {items.map((dataItem) => (
                    <li key={dataItem.id} onClick={() => addCartHandeler(dataItem)}>
                        <img src={dataItem.thumbnail} alt={dataItem.title} />
                        <h4>{dataItem.title}</h4>
                        <p>${dataItem.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}