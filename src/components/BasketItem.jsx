export const BasketItem = ({title, price, count, onAdd, onRemove, onDelete, id, subtotal})=>{
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{count > 2 ? subtotal || count * price : count * price}</td>
            <td>
            <button onClick={() => onAdd(id)}>+</button>
            <button onClick={() => onRemove(id)}>-</button>
            <button onClick={() => onDelete(id)}>X</button>
            </td>
        </tr>
    )
}