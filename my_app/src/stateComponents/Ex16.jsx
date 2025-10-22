import React, {useState} from "react";

export default function Exstate16(){
    const [user, setUser] = useState({ name: "철수", age:25 })
    // const [k, setK] = useState(25)
  
    return(
        <>
        <p>{user.name} - {user.age}</p>
        <button onClick={() => {
            console.log(user.age +1)
            setUser({ name: "철수", age:user.age +1 })}}>나이+1</button>
        </>
    )
}
