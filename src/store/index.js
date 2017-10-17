import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import routerItems from '../router'

import cartReducer from '../pages/cart/reducer'
import productsReducer from '../pages/products/reducer'

export default createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer,
    router: routerItems.reducer
  }),
  compose(
    routerItems.enhancer,
    applyMiddleware(routerItems.middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
