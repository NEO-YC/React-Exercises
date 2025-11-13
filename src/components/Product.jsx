import React from 'react'

function Product({name, price}) {


  return (
     <p style={{ border: "2px solid black" }}>
      {name}-{price}
    </p>
  )
}

export default Product