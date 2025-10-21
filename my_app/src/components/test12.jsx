// 함수 이름은 반드시 대문자로 시작해서 작성한다
function Test12(){
    // 문제12
    //  score 값에 따라 다른 색상을 표시하세요.
    // score 가 80 이상이면 파란색,
    // score 가 60 이상이면 초록색,
    // 그 외에는 빨간색으로 출력되도록
    // 단, 삼항 연산자 이용
    const score = 50;

    // 함수 안에는 받드시 return() 안에 작성한다
    return(
        // <> </> 빈태그 프래그먼트 이용해 작성
        <>
        <p style={{color: score >= 80 ? 'blue' : score >= 60 ? 'red' : 'green'}}>
        {score}점
        </p>
        </>
    )
}

// Test12 함수 내보내기
export default Test12;