import './CommentItem.css'
import './CommentItem.jsx'
import React, {useState} from "react"

export default function CommentBoard(){
    // 기본 정보
    const [comments, setComments] = useState([
        { id:0, text: '리액트 재밌어요!', like: 0 },
        { id:1, text: 'useState 너무 신기해요', like: 0 }
    ])
    const [inputComments, setInputComments] = useState('')

    const addComments = () => {
        if(inputComments.trim() === ''){
            return alert('댓글을 입력하세요')
        }

        let add = [...comments]
    
        add.push({
            id: comments.length,
            text: inputComments,
            like: 0
        })
    
        setComments(add)
    
        setInputComments('')
    }

    const delComments = (index) => {
        let del = [...comments]

        del.splice(index, 1)
        setComments(del)
    }


    // 좋아요 증가 함수
    // 증가해야하는 index 번호 모르면 증가가 안됨
    const addLike = (index) => {
        let likesCopy = [...comments]
        // 좋아요 증가
        likesCopy[index].like += 1
        setComments(likesCopy)
    }

    return(
        <CommentItem 
        comments = {comments}
        setComments = {setComments}
        inputComments = {inputComments}
        setInputComments = {setInputComments}
        addComments = {addComments}
        delComments = {delComments}
        addLike = {addLike}
        />
    )
}
