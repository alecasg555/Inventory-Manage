import axios from 'axios';
import { createOrder } from './orderActions';
export const getRequest = () => ({
  type: 'GET_REQUEST',
});


export const addProductToSell = (data) => ({
  type: 'ADD_PRODUCTS_TO_SELL',
  payload: data,
});

export const modifyProductsToSell = (data) => ({
  type: 'ADD_PRODUCTS_TO_SELL',
  payload: data,
});

export const getProductsRequestSuccess = (data) => ({
  type: 'GET_PRODUCTS_SUCCESS',
  payload: data,
});

export const getProductRequestSuccess = (data) => ({
  type: 'GET_PRODUCT_SUCCESS',
  payload: data,
});

export const ProductsRequestFailure = () => ({
  type: 'GET_PRODUCTS_FAILURE',
});

export const getProducts = (query) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      const response = await axios.get('http://localhost:8000/products');
      dispatch(getProductsRequestSuccess(response.data));
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      const response = await axios.get(`http://localhost:8000/products?id=${id}`);
      dispatch(getProductRequestSuccess(response.data[0]));
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      await axios.patch(`http://localhost:8000/products/${product.id}`,product);
      dispatch(getProducts());
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      dispatch(getProducts());
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      await axios.post('http://localhost:8000/products',product);
      dispatch(getProducts());
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};

export const addProductsToSell = (products) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      dispatch(addProductToSell(products));
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};

export const modifyProductToSell = (payload) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      dispatch(modifyProductsToSell(payload));
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};

export const createSell = (payload) => {
  return async (dispatch) => {
    dispatch(getRequest());
    try {
      dispatch(createOrder(payload.order));
      await payload.cartItems.map(ci => {
        ci.amount = ci.realProductAmount - ci.amount;
        axios.patch(`http://localhost:8000/products/${ci.id}`,ci);
      })
      dispatch(getProducts());
      dispatch(addProductsToSell([]))
    } catch (error) {
      dispatch(ProductsRequestFailure());
      console.log(error);
    }
  };
};
