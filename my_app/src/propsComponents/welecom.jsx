// 부모 컴포넌트
function Parent02(){
    return <Welecome name='길동'/>
}

export default Parent02

// 자식 컴포넌트
// props 명령어를 사용하려면 
// 자식과 부모가 같은 jsx 파일안에 존재해야 함
function Welecome(props){
    return <h1>안녕하세요. {props.name}님</h1>
}