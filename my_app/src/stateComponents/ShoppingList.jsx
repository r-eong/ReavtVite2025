import './ShoppingList.css'

import React, {useState} from "react"

export default function ShoppingList(){
    // 기본 정보
    const [items, setItems] = useState([
        { id:0, name: '우유', done: false },
        { id:1, name: '계란', done: false },
    ])
    const [inputItem, setInputItem] = useState('')
    const [changeItem, setchangeItem] = useState('구매완료')
    
    // 항목 추가
    const addItem = () => {
        // 미입력시 뜨는 안내창
        if(inputItem.trim() === ''){
            return alert('물건 이름을 입력하세요')
        }

        let add = [...items]

        add.push({
            id: items.length,
            name: inputItem,
            done: false
        })

        setItems(add)

        setInputItem('')
    }

    // 항목 삭제
    const delItem = (index) => {
        let del = [...items]

        del.splice(index, 1)
        setItems(del)
    }

    // h4 스타일 추가/삭제

    function h4Style(index){
        let itemCopy = [...items]
        itemCopy[index].done = !(itemCopy[index].done)
        setItems(itemCopy)
        console.log(itemCopy.done)
    }

    return(
        <div className='container'>
            {/* 메인 상단 */}
            <div className='main'>
                <h3>🛒 쇼핑 리스트</h3>
                <input onChange={(e) => setInputItem(e.target.value)} placeholder='물건 이름을 입력하세요' />
                <button onClick={addItem}>추가</button>
            </div>
            {/* 구매 리스트 */}
            <div className='list'>
                <ul>
                    {items.map((items, id) =>(
                        <li key = {items.id}>
                            <h4 style={{textDecoration: items.done ? 'line-through' : 'none'}}>{items.name}</h4>
                            <div className='Btn'>
                                <button onClick={() => h4Style(id)}>{items.done ? '취소' : '구매완료'}</button>
                                <button onClick={() => delItem(items.id)}>삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}