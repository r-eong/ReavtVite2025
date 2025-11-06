import { createContext } from "react";
import { useState } from "react";

export const WishlistContext = createContext()

export default function WishlistProvider({children}){
    const [wishlist, setWishlist] = useState([])

    const addWishlist = (product) => {
        const findList = wishlist.find((item) => item.id === product.id)

        if(findList === undefined){
            let wishCopy = [...wishlist]
            wishCopy.push(product)
            setWishlist(wishCopy)
        }
    }

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

    return(
        <WishlistContext.Provider value={{wishlist, addWishlist, removeWishlist, isWishList}}>
            {children}
        </WishlistContext.Provider>
    )
}