const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = state.cart.filter((item) => item.id === action.payload.id)
      const otherItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      )

      if (item.length === 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        }
      }
      return {
        ...state,
        cart: [
          ...otherItems,
          { ...action.payload, quantity: item[0].quantity + 1 },
        ],
      }
    case "DELETE_ITEM":
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      )
      return {
        ...state,
        cart: filteredItems,
      }
    default:
      return state
  }
}
export default cartReducer
