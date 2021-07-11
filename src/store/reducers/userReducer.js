import {LOGIN_USER, REGISTER_USER} from './types';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, user: action.payload};
    case REGISTER_USER:
      return {...state};
    default:
      return state;
  }
};

export default userReducer;
