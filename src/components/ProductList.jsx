import {Product} from './ProductItem'
export const ProductList = ({items, onMove})=>{
    return (
        <>
           <div>
            <h3>Product List</h3>
            <div className="list">
            {
                items.map(item=> <Product key={item.id} {...item} onMove={onMove}/>)
            }
            </div>
          </div>
        </>
    )
}

