// 문제13
// 동적 클래스면 적용 : isActive 상태에 따라 다른 className을 적용하세요
// true 일때 : box active / false 일때 : box

function Test13(){
    const isActive = true;

    return(
        <>
        <div className = {isActive === true ? "box active" : "box"}></div>
        </>
    )
}

export default Test13;