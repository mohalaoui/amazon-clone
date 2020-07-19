export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amout, item) => amout + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];

      // get index
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      // splice from index
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`cant remove product (id: ${action.id})`);
      }

      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
