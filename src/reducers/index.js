const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: action.item.quantity ? action.item.quantity : 1,
        },
      };
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: action.newQuantity,
        },
      };
    }

    case "REMOVE_ITEM": {
      const newState = { ...state };
      delete newState[action.item.id];
      return newState;
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
export const cartTotal = (state) => {
  const items = { ...state };
  let sum = Object.values(items).reduce((total, item) => {
    if (item.formattedPrice) {
      let parsedPrice = parseFloat(item.formattedPrice.slice(1));
      total += item.quantity * parsedPrice;
    }
    return total;
  }, 0);
  return sum;
};
