function CommentItem(comments,
        setComments,
        inputComments,
        setInputComments,
        addComments,
        delComments,
        addLike){
    return(
        <div className='container'>
            {/* 메인 상단 */}
            <div className='main'>
                <h3>💬 댓글 게시판</h3>
                <input onChange={(e) => setInputComments(e.target.value)} placeholder='댓글을 입력하세요' />
                <button onClick={addComments}>등록</button>
            </div>
            {/* 구매 리스트 */}
            <div className='list'>
                <ul>
                    {comments.map((comments, id) =>(
                        <li key = {comments.id}>
                            <p>{comments.text}</p>
                            <div className='Btn'>
                                <span onClick={() => addLike(id)} style={{cursor: 'pointer'}}>👍{comments.like}</span>
                                <button onClick={() => delComments(comments.id)}>삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}