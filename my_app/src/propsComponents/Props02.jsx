function UserCard02(props){
    return(
        <>
        <div style={{
            border: '1px solid #333',
            padding: '10px 60px',
            margin: '10px'
            }}>
            <p>이름 : {props.name}</p>
            <p>나이 : {props.age}</p>
            <p>도시 : {props.city}</p>
        </div>
        </>
    )
}

export default UserCard02