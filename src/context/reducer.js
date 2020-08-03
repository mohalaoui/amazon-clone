import * as actions from "./actions";

export const initialState = {
  cart: [
    // {
    //   id: "123456",
    //   image:
    //     "https://images-eu.ssl-images-amazon.com/images/I/61mVHsxerTL._AC_UL270_SR270,270_.jpg",
    //   title:
    //     "Corsair SPEC-DELTA, Carbide Series, RGB en Verre Trempé Moyen-tour Boîtier Gaming - Noir",
    //   rating: 3,
    //   quantity: 2,
    //   price: 78.9,
    // },
  ],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amout, item) => amout + item.price * item.quantity, 0);

export const getCartCount = (cart) =>
  cart?.reduce((amout, item) => amout + item.quantity, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      let cartToReturn = [...state.cart];
      const elementToAddIndex = cartToReturn.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );
      if (elementToAddIndex !== -1) {
        cartToReturn[elementToAddIndex].quantity += 1;
        return {
          ...state,
          cart: cartToReturn,
        };
      } else {
        let itemToReturn = { ...action.item };
        itemToReturn.quantity = 1;

        return {
          ...state,
          cart: [...state.cart, itemToReturn],
        };
      }

    case actions.APDATE_QUANTITY_CART:
      let cartToUpdate = [...state.cart];

      const elementToUpdateIndex = cartToUpdate.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      if (elementToUpdateIndex !== -1) {
        cartToUpdate[elementToUpdateIndex].quantity = action.item.quantity;
      }

      return {
        ...state,
        cart: cartToUpdate,
      };

    case actions.REMOVE_FROM_CART:
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
