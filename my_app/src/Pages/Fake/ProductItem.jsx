import { useEffect, useState } from "react";

export default function ProductItem(props){
    const pic = `https://picsum.photos/500?random=${props.data.id}`

    return(
        <>
        <img src={pic} alt={props.data.title} />
        <p className="title">{props.data.title.slice(0, 13)}</p>
        <p className="price">{(props.data.id * 13000).toLocaleString()}</p>
        </>
    )
}