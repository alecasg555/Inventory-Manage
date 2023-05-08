//Result initial state
const initialState = {
    orders: [],
    orderSelected:{},
    isLoading: false,
    error: ''
  };

//Reducer for orders
const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_REQUEST':
        return { ...state, isLoading: true };
      case 'GET_ORDER_SUCCESS':
        return { ...state, orderSelected: action.payload,isLoading:false };  
      case 'GET_ORDERS_SUCCESS':
          return { ...state, orders: [...action.payload],isLoading:false };  
      case 'GET_ORDERS_FAILURE':
        return { ...state, isLoading: false };
      default:
        return state;
    }
  };
  export default ordersReducer;
