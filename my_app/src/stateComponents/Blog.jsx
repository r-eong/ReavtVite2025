import React, {useState} from "react"

export default function Blog(){
    const [posts, setPosts] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
    const [likes, setLikes] = useState([0, 0, 0])
    const [modalOpen, setModalOpen] = useState(false)
    const [selected, setSelected] = useState(0)
    const [inputValue, setInputValue] = useState('')

    return(
        <>
        <ul style={{listStyle: 'none'}}>
            <li>
                <h3>{posts[0]}</h3>
                <p>{new Date().toLocaleDateString()} 발행</p>
            </li>
        </ul>
        </>
    )
}