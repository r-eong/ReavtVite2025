import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../Wishlist/WishlistContext";

import '../Difficulty/Difficulty.css'

export default function Difficulty({data}){
    // const dataCopy = [...data]
    const difficultyTab = data.sort((a,b) => a.rating - b.rating)

    const {addWishlist, removeWishlist, isWishList} = useContext(WishlistContext)

    return(
        <>
        <div className="Difficulty">
            <p>상품 {data.length}개</p>
            <div className="Difficulty_all">
                <ul>
                    {difficultyTab.map((item) => (
                        <li key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt={item.name} />
                                <p className="name">{item.name}</p>
                                <p>{item.cuisine}</p>
                                <p>★ {item.rating} / 후기 {item.reviewCount}</p>
                            </Link>
                            <button type="button"
                            onClick={() => isWishList(item.id) ? removeWishlist(item.id) : addWishlist(item)}
                            >{isWishList(item.id) ? '♥' : '♡'}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}