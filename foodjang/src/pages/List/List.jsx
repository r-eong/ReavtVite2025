import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../Wishlist/WishlistContext";

import '../List/List.css'
// import Detail from "../Detail/Detail";

export default function List({data}){
    // 전체
    const [categoryshowAll, setCategoryshowAll] = useState(true)
    const dataCopy01 = [...data]
    const sortList01 = dataCopy01.sort((a,b) => a.id - b.id)

    // 카테고리
    const [list, setList] = useState('American')
    const tabFilter = data.filter((item) => item.cuisine === list)
    const filterList = (cuisine) => {
        setList(cuisine)
        setCategoryshowAll(false)
    }

    const {addWishlist, removeWishlist, isWishList} = useContext(WishlistContext)

    return(
        <>
        <div className="List">
            <p>상품 {data.length}개</p>
            <div className="cuisine">
                <p className="line" onClick={() => setCategoryshowAll(true)}>전체</p>
                <p className="line" onClick={() => filterList('American')}>American</p>
                <p className="line" onClick={() => filterList('Asian')}>Asian</p>
                <p className="line" onClick={() => filterList('Greek')}>Greek</p>
                <p className="line" onClick={() => filterList('Italian')}>Italian</p>
                <p className="line" onClick={() => filterList('Indian')}>Indian</p>
                <p className="line" onClick={() => filterList('Japanese')}>Japanese</p>
                <p className="line" onClick={() => filterList('Mediterranean')}>Mediterranean</p>
                <p className="line" onClick={() => filterList('Mexican')}>Mexican</p>
                <p className="line" onClick={() => filterList('Moroccan')}>Moroccan</p>
                <p className="line" onClick={() => filterList('Pakistani')}>Pakistani</p>
                <p className="line" onClick={() => filterList('Smoothie')}>Smoothie</p>
                <p className="line" onClick={() => filterList('Thai')}>Thai</p>
                <p onClick={() => filterList('Turkish')}>Turkish</p>
            </div>
            <div className="list_all">
                <ul>
                    {(categoryshowAll ? sortList01 : tabFilter).map((item, index) => (
                        <li key={index}>
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