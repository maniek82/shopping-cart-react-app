import React, {Component} from 'react';

import fetchApi from '../../modules/fetch-api';

class Order extends Component {
    state = {
        order: null
    }
    componentDidMount = () => {
      fetchApi("get",`https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`).then(json => {
          this.setState({
              order: json
          })
      })
    }
    renderOrder() {
        const {name, email, order_items} = this.state.order;
        
        return <div>
            <h3>Order info</h3>
            <div>Name: {name}</div>
            <div>Email: {email}</div>

            <h4>Items</h4>
            <ul>
                {
                    order_items && order_items.map(item => {
                        
                        const {product, qty, product: {name, image, price}} = item
                        
                        return <li key={item.id}>
                            <span>Product: {product.name} </span>
                            <img src={image} width={32} /> 
                            <span> QTY: {qty} @ ${price} = Total: ${parseFloat(qty) * parseFloat(price)  }</span>
                          
                        </li>
                        
                    })
                
                }
            </ul>
              
        </div>
    }

    render() {
        const {order} = this.state
        return <div>
        {
            order ? this.renderOrder() : "Loading..."
        }
        </div>

    }
    
}

export default Order;