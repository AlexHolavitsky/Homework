const initialState = {
    hotels: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_HOTELS_SUCCESS':
        return { ...state, hotels: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  