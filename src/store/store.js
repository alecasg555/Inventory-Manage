import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../reducers/articlesReducer';
import ordersReducer from '../reducers/ordersReducer';


//Root reducer that combines all the reducer in one
const rootReducer = combineReducers({
  products: articlesReducer,
  orders:ordersReducer

});
//Store the global state of tha app based on the reducers
export const store = configureStore({
  reducer: rootReducer
});
