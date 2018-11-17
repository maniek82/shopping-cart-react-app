import React from 'react'
import {connect} from 'react-redux';

const sort = items => {
    return items.sort((a, b) => {
      if (a.id !== b.id) {
        return a.id - b.id;
      }
    });
  }

function Cart(props) {
    let items = sort(props.cart);
    if(items.length > 0)  {

    return (
     <table>
        <thead>
            <tr>
                <th>Item </th>
                <th>Quantity</th>
                <th>Add / Remove</th>
                <th> Remove All</th>
            </tr>
        </thead>
        <tbody>
            {
                
                items.map(item => 
                <tr key={item.id}>
                    <td> {item.name}</td>
                    <td> {item.quantity}</td>
                    <td>
                        <button
                        onClick = {()=> props.addToCart(item)}
                        >+</button>
                        <button
                        onClick={()=> props.removeFromCart(item)}
                        >-</button>
                    </td>
                    <td>
                        <button
                        onClick={()=> props.removeAllFromCart(item)}
                        >Remove all from cart</button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
  )
   } else {
    return <h1 style={{textAlign: 'center', color:'red'}}> Card is empty</h1>
   }
    
   
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type:'REMOVE', payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type:'REMOVE_ALL', payload: item})
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)