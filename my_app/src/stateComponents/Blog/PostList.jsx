// 자식 컴포넌트 는 UI

export default function PostList(props){
    return(
        <>
        <div>
            <ul style={{listStyle: 'none'}}>
                {/* 좋아요 배열 */}
                {props.posts.map((posts, index) =>(

                <li key = {index} style={{border: '1px solid #999', margin: '10px 0', padding: '10px', borderRadius: '10px'}}>
                    <h3 style={{cursor: 'pointer'}} onClick={() => {props.setModalOpen(true); props.setSelectedIndex(index);}}>
                        {posts} 
                        {/* 버블링 : 자식을 선택해도 부모요소인 <h3>태그가 실행됨.
                        버블링을 해결하는 메소드 -> e.stopPropagation() */}
                        <span onClick={(e) => {e.stopPropagation(); props.addLike(index);}} >
                            👍 {props.likes[index]}
                        </span>
                    </h3>
                    <p>{new Date().toLocaleDateString()} 발행</p>
                    <button onClick={() => props.delPost()}>삭제</button>
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}