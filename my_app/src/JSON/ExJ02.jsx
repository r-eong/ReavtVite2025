import React, {useState, useEffect} from "react";

export default function ExJ02(){
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('가져온 데이터', data)
            setPost(data)
        })
        .finally(() => {
            console.log('요청완료')
            setLoading(false)
        })
    },[])

    return(
        <>
        <h2>게시글 5개</h2>
        <ul>
            {post.slice(0, 5).map((post)=>(
                <li key={post.id} onClick={() => alert(post.body)} style={{cursor: 'pointer'}}>
                    {post.title}
                </li>
            ))}
        </ul>
        </>
    )
}