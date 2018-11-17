import React from 'react'
import AddButton from './add-btn';
import RemoveButton from './remove-btn';

export default function ProductListItem(props) {
    
  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img  alt={props.product.name} height ={100} title={props.product.name} src={`${props.product.image}`} />

      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
          <AddButton 
          addToCart={props.addToCart} 
          product={props.product} 
          cartItem={props.cartItem}

          />

          {
             props.cartItem 
             ? <RemoveButton 
                removeFromCart={props.removeFromCart} 
                product={props.product} 
                cartItem={props.cartItem}
                />
             : null 
          }
           
          
      </div>
    </div>
  )
}
