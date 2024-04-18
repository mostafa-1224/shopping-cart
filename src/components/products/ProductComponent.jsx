import React from 'react'

function ProductComponent({item}) {
  return (
    <div className='product'>
      <div className="product-details">
        <img src={item.thumbnail} alt="product image"/>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
      <button onClick={() => { console.log(item) }}>Add To Cart</button>
    </div>
  )
}

export default ProductComponent