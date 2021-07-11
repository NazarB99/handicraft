import {FETCH_PRODUCT, FETCH_PRODUCT_LIST} from '../reducers/types';
import {API_URL} from '../../commons/Constants';

export const getProductList = () => dispatch => {
  console.log(`${API_URL}/products`);
  fetch(`${API_URL}/products?filter={}&range=[0,100]`, {
    method: 'GET',
  }).then(res =>
    res
      .json()
      .then(result =>
        dispatch({type: FETCH_PRODUCT_LIST, payload: result}),
      ),
  );
};

export const getProductById = id => dispatch => {
  fetch(`${API_URL}/products/${id}`, {
    method: 'GET',
  }).then(res =>
    res.json().then(result => dispatch({type: FETCH_PRODUCT, payload: result})),
  );
};
