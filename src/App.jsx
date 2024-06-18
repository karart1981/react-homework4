import { useState } from 'react';
import {Basket} from './components/Basket';
import {ProductList} from './components/ProductList';
import './App.css'

function App() {
  const [basket,setBasket] = useState([])
  const [products, setProducts] = useState([
    { id: 1, name: 'Politics', price: 70, photo:'https://i5.walmartimages.com/seo/DK-Big-Ideas-The-Politics-Book-Big-Ideas-Simply-Explained-Paperback-9781465473905_0dffe288-b179-4884-9c5b-b2c742ae1b96.cb12fcffb2304c0166f7872228993570.jpeg'},
    { id: 3, name: 'Philosophy', price: 45, photo:'https://d3525k1ryd2155.cloudfront.net/f/617/668/9780756668617.RH.0.x.jpg'},
    { id: 4, name: 'Art', price:65, photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0SHmHsGAwDGWcRlRLJnDKxxClh3NM6zIhQ&s'},
    { id: 5, name: 'Physics', price:77, photo:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569197039l/51380777.jpg'},
    { id: 5, name: 'Chemistry', price:50, photo:'https://mphonline.com/cdn/shop/products/9780241515549.jpg?v=1649306652'},
    { id: 5, name: 'Astronomy', price:55, photo:'https://prodimage.images-bn.com/pimages/9781465464187_p0_v5_s1200x630.jpg'}
  ])

  const moveToCart = id =>{
    const item = products.find(product => product.id === id)
    if (basket.includes(item)){
      const index = basket.findIndex(elm => elm === item)
      basket[index].count += 1
      basket[index].subtotal = basket[index].count * basket[index].price
      setBasket([...basket])
    }else{
      item.count = 1
      setBasket([...basket, item])
    }
  }
  function addCount(id){
    const item = products.find(product => product.id === id)
    const index = basket.findIndex(elm => elm === item)
    basket[index].count += 1
    basket[index].subtotal = basket[index].count * basket[index].price
    setBasket([...basket])
  }
  function removeCount(id){
    const item = products.find(product => product.id === id)
    const index = basket.findIndex(elm => elm === item)
    if (basket[index].count > 1){
      basket[index].count -= 1
      basket[index].subtotal -= basket[index].price
      setBasket([...basket])
    }else{
      setBasket(basket.filter(elm => elm !== item))
    }
  }
  function removeItem(id){
    const item = products.find(product => product.id === id)
    setBasket(basket.filter(elm => elm !== item))
  }

  return (
    <>
      <div className="row">
         <ProductList items={products} onMove={moveToCart} onRemove={removeCount} onDelete={removeItem} />
         <Basket items={basket} onAdd={addCount} onRemove={removeCount} onDelete={removeItem} />
      </div>
    </>
  )
}

export default App;
