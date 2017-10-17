import cartActionTypes from './actions'

const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const product = action.payload
      return {
        products: [ product, ...state.products ]
      }

    default:
      return state
  }
}
