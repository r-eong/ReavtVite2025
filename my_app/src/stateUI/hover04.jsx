import React, {useState} from "react";

export default function Hover04(){
    // activeTab 가 nul 면 이동할 탭찾을 때 사용
    const [activeTab, setActiveTab] = useState(null)
    const tabs = [
        {id: 1, title: 'HTML', content: 'HTML은 웹의 구조를 담당한다'},
        {id: 2, title: 'CSS', content: 'CSS는 스타일을 담당한다'},
        {id: 3, title: 'JavaScript', content: 'JavaScript는 동작을 담당한다'},
    ]

    // 활성화된 탭의 내용을 찾는 코드
    // 배열이름.find((요소, 인덱스, 원본배열) => (return 조건))
    // 조건을 만족하는 첫 번째 요소(그 객체 또는 값)을 반환
    // 만약 못 찾으면 indefined를 반환한다
    // 검색이나 상세보기

    // 기본 text
    let contentText = '탭 위에 마우스를 올려보세요'
    if(activeTab !== null){
        // acvtiveTab과 같은 id를 가진 탭을 찾아야함
        // 결론 : findTab = 1 또는 2 또는 3
        const findTab = tabs.find((item) => item.id === activeTab)

        console.log(`여기까지1 ${findTab}`)

        // 탭을 찾았으면 그 탭의 내용(content)를 contentText = content 로 수정됨
        if(findTab){
            console.log(`여기까지2 ${findTab}`)
            contentText = findTab.content
            console.log(`여기까지3 ${contentText}`)
        }
    }

    return(
        <div style={{width: '400px', margin: '50px auto'}}>
            <h3>Hover Tab Menu</h3>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {tabs.map((tab) => (
                    // map() =>  반드시 태그의 고유 번호(=유일해야됨)가 필요
                    // 고유 key = {tab.id}
                    <div 
                    key={tab.id} 
                    style={{cursor: 'pointer'}}
                    // 마우스 활성화
                    onMouseEnter={() => setActiveTab(tab.id)} 
                    // 마우스 비활성화
                    onMouseLeave={() => setActiveTab(null)}
                    >{tab.title}</div>
                ))}
            </div>

            {/* 탭 영역 */}
            <div style={{
                marginTop: '20px', 
                padding: '15px', 
                backgroundColor: '#fefefe', 
                borderRadius: '5px', 
                height: '50px'}}>{contentText}</div>
        </div>
    )
}