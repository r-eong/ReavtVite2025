import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext} from "./WishlistContext";

import '../Wishlist/WishlistPage.css'

export default function WishlistPage(){
    const {wishlist, removeWishlist, cleanItem} = useContext(WishlistContext)
   
    console.log(wishlist)
    return(
        <div className="WishlistPage">
            <h2>찜한 상품 목록</h2>
            {wishlist.length === 0 ? <p>찜한 상품이 없습니다.</p> : (
                <ul>
                    <button type="button" onClick={cleanItem}>전체삭제</button>
                    {wishlist.map((item) => (
                        <li key={item.id}>
                            <button type="button" onClick={() => removeWishlist(item.id)}>X</button>
                            <img src={item.image} alt={item.name}/>
                            <div>
                            <p>{item.name} - {item.cuisine}</p>
                            <p>★ {item.rating} / 후기 {item.reviewCount}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                )
            }
        </div>
    ) 
}