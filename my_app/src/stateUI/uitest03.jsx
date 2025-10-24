import React, {useState} from "react";

// prompt('당신의 이름을 입력하세요', '홍길동')
// 1. 첫 번째 인자 : 사용자에세 보여줄 메시지
// 2. 두 번째 인자 : 입력창의 기본값
// 3. 사용자가 [확인]을 클릭하면 입력한 문자가 반환됨
//  4. 사용자가 [취소]를 클릭하면 null 로 반환됨

export default function PromptChange(){
    const [name, setname] = useState('')

    const handelerClick = () => {
        const userName = prompt('당신의 이름을 입력하세요', '홍길동')
        if(userName){
            setname(userName)
        }else{
            alert('이름 입력이 취소되었습니다')
        }
    }

    return(
        <div>
            <h2 style={{padding: '20px'}}>이름 : {name}</h2>
            <button onClick={handelerClick}>이름 입력하기</button>
        </div>
    )
}