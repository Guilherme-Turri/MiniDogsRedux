import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import login from './login';
import localStorage from './middleware/localStorage';
import photos from './photos';

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({ login, photos });
const store = configureStore({ reducer, middleware });

export default store;
