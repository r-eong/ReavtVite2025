import { useContext } from "react";
import { wishlistContext } from "./wishListContext";

// 찜한 목록 출력
export default function WishListPage(){
    // 공유 데이터 가져오기
    const {wishList, removeFromWishList} = useContext(wishlistContext)

    return(
        <div style={{padding: '20px'}}>
            <h2>찜한 상품 보기</h2>
            {/* 찜한 상품이 없으면 메시지 출력 : 찜한 상품이 없습니다 */}
            {wishList.lenhth === 0 ? <p>찜한 상품이 없습니다.</p> : (
                <ul>
                    {wishList.map((item) => (
                        <li key={item.id} style={{marginBottom: '10px'}}>
                            {item.name} - {item.price.toLocaleString()}
                            <button type="button" style={{color: 'red'}} onClick={() => removeFromWishList(item.id)}>X</button>
                        </li>
                    ))}
                </ul>)
            }
        </div>
    )
}