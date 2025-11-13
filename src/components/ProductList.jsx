import React from 'react'
import Product from './Product';

function ProductList() {

        const productsarr = [
  { name: "Laptop", price: 3500 },
  { name: "Headphones", price: 50 },
  { name: "Smartphone", price: 2800 },
  { name: "Keyboard", price: 40 },
  { name: "Monitor", price: 900 }
];


  return (
    <div>
        {productsarr.map((item,index)=> {
            return <Product key={index} name={item.name} price={item.price}/>
        })}




    </div>
  )
}

export default ProductList