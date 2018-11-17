import React, { Component } from 'react';
import Router from './Router'
import Navigation from './features/navigation';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
     <div className="page-container">
       <Navigation {...this.props}/>
      <Router />
     </div>
    )
}
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default withRouter(connect(mapStateToProps)(App));
