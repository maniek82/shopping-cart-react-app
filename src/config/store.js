import {createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer';
import productsReducer from '../features/product-listings/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer =  combineReducers({
    cart: cartReducer,
    products: productsReducer,
    form: formReducer

})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;