import { API_URL, URL } from "../../commons/Constants";
import {LOGIN_USER} from '../reducers/types';

export const login = (email, password) => dispatch => {
  console.log(email, password)
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/auth/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({email, password}),
    })
      .then(res =>
        res.json().then(result => {
          console.log(result);
          if (result.statusCode && result.message) {
            reject(`Ошибка: ${JSON.stringify(result.message)}`);
          } else {
            dispatch({type: LOGIN_USER, payload: result});
            resolve();
          }
        }),
      )
      .catch(err => {
        reject(`Ошибка: ${JSON.stringify(err.message)}`);
      });
  });
};

export const register =
  (email, password, firstname, lastname, role) => dispatch => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/auth/register`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({email, password, firstname, lastname, role}),
      })
        .then(res =>
          res.json().then(result => {
            console.log(result);
            if (result.statusCode && result.message) {
              reject(`Ошибка: ${JSON.stringify(result.message)}`);
            } else {
              dispatch({type: LOGIN_USER, payload: result});
              resolve(result.message);
            }
          }),
        )
        .catch(err => {
          reject(`Ошибка: ${JSON.stringify(err.message)}`);
        });
    });
  };
