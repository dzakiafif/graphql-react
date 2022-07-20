const initialState = {
    data: localStorage.getItem('my-collection') ? 
    JSON.parse(localStorage.getItem('my-collection')) : [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COLLECTION':
          return { ...state, data: [...state.data, action.payload] }
      case 'REMOVE_COLLECTION':
          return { ...state, data: state.data.filter(val => val.name !== action.payload.name) }
      default:
        return state;
    }
  };
  
  export { rootReducer, initialState };
  