const initialState = {
    data: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COLLECTION':
          return { data: [...state.data, action.payload] };
      case 'REMOVE_COLLECTION':
          return state.data.filter((name) => name !== action.payload.name);
      default:
        return state;
    }
  };
  
  export { rootReducer, initialState };
  