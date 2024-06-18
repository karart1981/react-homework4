export const Product = ({photo,title,price,id,onMove})=>{
    return (
        <div>
            <img src={photo} />
            <p>{title}</p>
            <p><strong>{price} USD</strong></p>
            <button onClick={()=> onMove(id)}>move</button>
        </div>
    )
}