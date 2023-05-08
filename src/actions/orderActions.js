import axios from 'axios';
import { getProducts } from './actions';
export const getRequest = () => ({
  type: 'GET_REQUEST',
});


export const getOrdersRequestSuccess = (data) => ({
  type: 'GET_ORDERS_SUCCESS',
  payload: data,
});

export const getOrderRequestSuccess = (data) => ({
  type: 'GET_ORDER_SUCCESS',
  payload: data,
});


export const OrdersRequestFailure = () => ({
  type: 'GET_ORDERS_FAILURE',
});

export const getOrders = (query) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      const response = await axios.get('http://localhost:8000/orders');
      dispatch(getOrdersRequestSuccess(response.data));
    } catch (error) {
      dispatch(OrdersRequestFailure());
      console.log(error);
    }
  };
};
export const getOrder = (id) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      const response = await axios.get(`http://localhost:8000/orders?id=${id}`);
      dispatch(getOrderRequestSuccess(response.data[0]));
    } catch (error) {
      dispatch(OrdersRequestFailure());
      console.log(error);
    }
  };
};


export const createOrder = (order) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      await axios.post('http://localhost:8000/orders',order);
      dispatch(getOrders());
      dispatch(getProducts());
    } catch (error) {
      dispatch(OrdersRequestFailure());
      console.log(error);
    }
  };
};
