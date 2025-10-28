import React,{useState} from "react";

export default function ChangeImg04(){
    // category 별 이미지를 탭메뉴에 출력
    // 조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출하는 함수
    // ┖> 배열이름.filter((요소, 인덱스, 배열) => {return 조건})
    // 조건에 만족하는 새로운 배열을 반환한다
    // 조건에 만족하지 않으면 빈 배열 [ ] 반환한다
    // imgs.filter((img) => 조건) => 조건에 만족하면 [{id:1},{id:2},{id:3},{id:4}]
    const imgs = [
        { id: 1, name: 'pic-1.jpg', category: 1 },
        { id: 2, name: 'pic-2.jpg', category: 1 },
        { id: 3, name: 'pic-3.jpg', category: 1 },
        { id: 4, name: 'pic-4.jpg', category: 1 },
        { id: 5, name: 'tree-1.jpg', category: 2 },
        { id: 6, name: 'tree-2.jpg', category: 2 },
        { id: 7, name: 'tree-3.jpg', category: 2 },
        { id: 8, name: 'tree-4.jpg', category: 2 },
    ]
    // 선택한 category의 값이 담기는 변수
    // 초기값을 1로 줌
    // 고로, category=1 의 이미지가 출력되도록 함
    const [imgCategory, setImgCategory] = useState(1)

    // 배열이름.filter()
    // imgCategory = 1 과 imgs 의 
    const filterImg = imgs.filter((img) => (img.category === imgCategory))
    console.log(filterImg)

    return(
        <>
        <h3>이미지 탭 전환 예제</h3>
        <button onClick={() => setImgCategory(1)}>배경</button>
        <button onClick={() => setImgCategory(2)}>나무</button>
        
        <div style={{
            display: 'flex',
            gap: '5px'
        }}>
            {/* map() 필요 -> 배열로 -> filter()는 배열로 담김 */}
            {/* filter() 로 추출한 결과를 map() 으로 출력 */}
            {filterImg.map((img) => (
                <img 
                key={img.id} 
                src={`/images/${img.name}`} 
                alt={img.name}
                style={{
                    width: '200px',
                    borderRadius: '10px'
                }} />
            ))}
        </div>
        </>
    )
}