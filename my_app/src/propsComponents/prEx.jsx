function Parent04(){
    // 화살표 함수 생성 sayHello() => alert('난 부모')
    const sayHello = () => {
        alert('난 부모')
    }
    return(
        <>
            <Button01 onClickEvent={sayHello} />
        </>
    )
}
export default Parent04

function Button01(props){
    return(
        <>
        <button onClick={props.onClickEvent}>눌러보기</button>
        </>
    )
}