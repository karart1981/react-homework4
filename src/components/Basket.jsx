import { BasketItem } from "./BasketItem"
import {useState} from 'react';

export const Basket = ({items,onAdd, onRemove, onDelete, onSale, isSale=false})=>{
    const handleSaleClick = () => {
        setIsSale(true);
        onSale();
    };
    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                   <tr>
                      <th>product</th>
                      <th>price</th>
                      <th>count</th>
                      <th>subtotal</th>
                      <th>actions</th>
                      {
                            !isSale && (
                                <th>
                                    <button onClick={handleSaleClick}>sale</button>
                                </th>
                            )
                        }
                   </tr>
                </thead>
                <tbody>
                {
                    items.map(item => <BasketItem key={item.id}{...item} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} onSale={onSale}/>)
                }
                </tbody>
            </table>
        </div>
    )
}