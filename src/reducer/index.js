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
      case 'ADD_COLLECTION_ITEM':
          const checkCollection = state.data.filter(val => val.name === action.payload.name);
          checkCollection.length > 0 && checkCollection.map(val => val.collectionItem.push(action.payload.collectionItem));
          return { ...state, data: checkCollection };
      case 'REMOVE_COLLECTION_ITEM':
          const checkCollectionRemoveItem = state.data.filter(val => val.name === action.payload.name);
          checkCollectionRemoveItem.length > 0 && checkCollectionRemoveItem.map(val => val.collectionItem = val.collectionItem.filter(val => val.name !== action.payload.collectionItem.name));
          return { ...state, data: checkCollectionRemoveItem };
      default:
        return state;
    }
  };
  
  export { rootReducer, initialState };
  