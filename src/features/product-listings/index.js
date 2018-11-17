import React,{Component} from 'react';
import {connect} from 'react-redux';
import ProductListItem from './product-list-item.js';

import fetchApi from '../../modules/fetch-api'
 class ProductListing extends Component {

    componentDidMount() {
        const {loadProducts} = this.props
        fetchApi('get','https://student-example-api.herokuapp.com/v1/products.json').then(json => {
           loadProducts(json) 
        })
    }
    render()  {
     const {addToCart, removeFromCart, cart, products} = this.props
        return (
            <div className="product-listing">
              {
                  products.map(product => 
                  <ProductListItem 
                  product={product }  
                  key={product.id} 
                  addToCart = {addToCart}
                  removeFromCart = {removeFromCart}
                  cartItem = { cart.filter(cartItem => cartItem.id ===product.id)[0]}
        
                  />)
              }
            </div>
          )

    }
  
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item})
        },
        loadProducts: (products) => {
            dispatch({type:'LOAD', payload: products})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)