// useContext 는 공유한 데이터를 가져오는 훅
import { useContext } from "react";
// 내가 만든 공유한 데이터를 저장한 저장소
import { wishlistContext } from "./wishListContext";

// 임시로 사용할 상품 데이터
// 전역으로 가져와야함!
const products = [
    { id: 1, name: '노트북', price: 1500000 },
    { id: 2, name: '마우스', price: 30000 },
    { id: 3, name: '키보드', price: 80000 },
];

export default function ProductList(){
    // 공유한 데이터를 가져옴
    const {wishList, addToWishList, removeFromWishList, isWishList} = useContext(wishlistContext)

    return(
        <div style={{padding: '20px'}}>
            <h2>📚 상품 목록</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id} style={{marginBottom: '10px'}}>
                        {item.name} - {item.price.toLocaleString()}원
                        <button 
                        type="button" 
                        onClick={() => 
                            // 현재 상품이 찜 목록에 존재하는 지 확인. 존재하면 true, 존재하지 않으면 false
                            isWishList(item.id) ? removeFromWishList(item.id) : addToWishList(item)
                        }>
                            {/* 버튼 안의 문구 : 선택 💜, 해제 🤍 */}
                            {isWishList(item.id) ? '💜 찜해제' : '🤍 찜하기'}
                        </button>
                    </li>
                ))}
            </ul>
            <p>현재 찜한 상품 수 : {wishList.length}개</p>
        </div>
    )
}