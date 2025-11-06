// creatContext => 공유 데이터를 저장하는 저장소를 생성하는 함수
// 반드시 import {creatContext} 한다
import { createContext } from "react";
// 상태변수를 사용 useState 를 import 한다
import { useState } from "react";

// Context 생성 : wishlistContext
// Context 생성한 후 내보내야함. 반드시 export
// 저장소 만든거임!
// 생성자 함수
export const wishlistContext = createContext()

// Provider(공급자) : 데이터를 공급하는 컴포넌트
export default function WishListProvider({children}){
    // 찜한 항목을 저장할 상태변수를 정의
    // 초기값은 빈배열
    const [wishList, setWishList] = useState([])
    
    // 찜한 상품을 추가하는 함수
    // 이미 같은 id를 가진 상품이 존재하면 중복항목을 추가하면 안됨
    // 존재 유무 확인해야함
    const addToWishList = (product) => {
        // 중복을 피하기 위해 같은 id 가 존재하는지 확인
        // ┖> 배열.find() 사용
        // 배열.find() -> 찾는 항목이 존재하면 오브젝트 배열로 출력.
        //                항목이 없으면 undefind 출력.
        const listFind = wishList.find((item) => item.id === product.id)
        // listFind 에 같은 id 가 존재하면 찜 항목 추가되면 안됨
        if(listFind === undefined){
            // 찜 항목에 추가
            let wishCopy = [...wishList]
            // 내가 선택한 항목 {오브젝트} 으로 추가
            wishCopy.push(product)
            // 업데이트
            setWishList(wishCopy)
        }
    }

    // 찜 해제/삭제
    // filter() 이용해서 id 가 다른 항목만 남겨서 업데이트 하는 기능 사용
    const removeFromWishList = (id) => {
        setWishList(wishList.filter((item) => item.id !== id))
    }
    // ┖> 이건 실제로 삭제한 게 아니라 ui상 없애기만 한 것임!

    // 이미 찜된 항목 확인을 위해 생성하는 함수
    // 해당 id 의 상품 객체가 존재하면 true, 없으면 false 반환
    const isWishList = (id) => {
        // wishList 배열에서 id 가 일치하는 상품을 찾는다
        const findItem = wishList.find((item) => item.id === id)
        // 찾는 상품이 존재하면 findItem 은 객체(object). 없으면 indefind.
        if(findItem !== undefined){   // id 존재함? 이라는 뜻
            // 상품이 이미 찜 되어있으면 true 로 반환
            return true;
        }else{
            // 상품이 없으면 false 로 반환
            return false;
        }
    }
    // provider(공급) 생성
    return(
        <wishlistContext.Provider value={{wishList, addToWishList, removeFromWishList, isWishList}}>
            {/* childern 이란? 
            wishListContext 의 하위 컴포넌트 모두를 의미 */}
            {children}
        </wishlistContext.Provider>
    )
}