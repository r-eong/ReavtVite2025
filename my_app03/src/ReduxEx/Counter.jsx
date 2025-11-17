// Counter.jsx 파일은 컴포넌트 파일로 UI
// useSeletor 와 useDispatch 훅을 이용해 상태를 읽고, 액션을 보낸다
// useDispatch는 단순히 값만 보낸다
// counterReducer가 그 값을 처리해서 store에 저장한다
// Counter.jsx가 useSelector로 그걸 읽는다

import { useSelector, useDispatch } from "react-redux";

export default function Counter(){
    // useSelector 이용해 state 의 cout를 읽어온다
    const count = useSelector(state => state.count)
    console.log('처음이야', count)
    // useDispatch 이용해서 내보낸다
    const dispatch = useDispatch()

    const dispatchPlusBtn = () => {
        if(count >= 10){
            alert('10이상 안됨!')
        }else{
            dispatch({type: 'INCREMENT'})
        }
    }
    const dispatchMinusBtn = () => {
        if(count <= 0){
            alert('0이하 안됨!')
        }else{
            dispatch({type: 'DECREMENT'})
        }
    }

    return(
        <>
        <h2>Count {count}</h2>
        <button type="button" onClick={() => dispatchPlusBtn()}>+</button>
        <button type="button" onClick={() => dispatchMinusBtn()}>-</button>
        </>
    )
}