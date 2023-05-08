//Result initial state
const initialState = {
    products: [],
    productSelected:{},
    productsToSell:[],
    isLoading: false,
    error: ''
  };

//Reducer for articles
const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_REQUEST':
        return { ...state, isLoading: true };
      case 'GET_PRODUCT_SUCCESS':
          return { ...state, productSelected: action.payload,isLoading:false };  
      case 'GET_PRODUCTS_SUCCESS':
        return { ...state, isLoading: false, products: action.payload };
      case 'GET_PRODUCTS_FAILURE':
        return { ...state, isLoading: false };
      case 'ADD_PRODUCTS_TO_SELL':
        return { ...state, isLoading: false,productsToSell:action.payload };
      case 'MODIFY_PRODUCT_TO_SELL':
          return { ...state, isLoading: false,productsToSell:[...action.payload]}
      default:
        return state;
    }
  };
  export default articlesReducer;
