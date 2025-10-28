export default function JellyCatList(props){
    return(
        <div className="list">
            <ul>
                {props.filterImg.map((dolls) => (
                    <li key={dolls.id} >
                        <img 
                        src={`/tableImg/${dolls.img}`} 
                        alt={dolls.name}
                        onClick={props.addCart}
                        ></img>
                        <span>{dolls.name}</span>
                        <p>{dolls.price}</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}