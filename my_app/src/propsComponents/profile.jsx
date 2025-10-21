// 부모 컴포넌트
function Parent03(){
    const userName = '진달래'
    const age = 25

    return(
        <Profile user={userName} ag={age} />
    )
}

export default Parent03

// 자식 컴포넌트
function Profile(props){
    return(
        <>
        <div>
            <h2>이름 : {props.user}</h2>
            <p>나이 : {props.ag}</p>
        </div>
        </>
    )
}