import { createContext } from "react";
import { useState, useEffect } from "react";

export const WishlistContext = createContext()

export default function WishlistProvider({children}){
    // const [wishlist, setWishlist] = useState([])
    // 찜한 항목 데이터 저장 - 새로고침해도 사라지지 않음
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('wishlist')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])

    // 찜 추가
    const addWishlist = (product) => {
        const findList = wishlist.find((item) => item.id === product.id)

        if(findList === undefined){
            let wishCopy = [...wishlist]
            wishCopy.push(product)
            setWishlist(wishCopy)
        }
    }

    // 찜 개별 삭제/해제
    const removeWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id))
    }

    const isWishList = (id) => {
        const findItem = wishlist.find((item) => item.id === id)

        if(findItem !== undefined){
            return true
        }else{
            return false
        }
    }

    // 찜 전체 삭제
    const cleanItem = () => {
        setWishlist([])
        localStorage.removeItem('wishlist')
    }

    return(
        <WishlistContext.Provider value={{wishlist, addWishlist, removeWishlist, isWishList, cleanItem}}>
            {children}
        </WishlistContext.Provider>
    )
}