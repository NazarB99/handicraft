import {FETCH_PRODUCT, FETCH_PRODUCT_LIST} from './types';

const initialState = {
  products: null,
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {...state, products: action.payload};
    case FETCH_PRODUCT:
      return {...state, product: action.payload};
    default:
      return state;
  }
};

export default productReducer;
