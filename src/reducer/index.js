const initialState = {
  data: localStorage.getItem("my-collection")
    ? JSON.parse(localStorage.getItem("my-collection"))
    : [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLLECTION":
      return { ...state, data: [...state.data, action.payload] };
    case "REMOVE_COLLECTION":
      return {
        ...state,
        data: state.data.filter((val) => val.name !== action.payload.name),
      };
    case "ADD_COLLECTION_ITEM":
      state.data
        .find((val) => val.name === action.payload.name)
        .collectionItem.push(action.payload.collectionItem);
      return { ...state, data: state.data };
    case "REMOVE_COLLECTION_ITEM":
      state.data.find(val => val.name === action.payload.name).collectionItem = state.data.find((val) => val.name === action.payload.name).collectionItem.filter(val => val.id !== action.payload.collectionItem.id);
      return { ...state, data: state.data };
    // const checkCollectionRemoveItem = state.data.find(val => val.name === action.payload.name);
    // checkCollectionRemoveItem.length > 0 && checkCollectionRemoveItem.forEach(val => val.collectionItem = val.collectionItem.filter(val => val.id !== action.payload.collectionItem.id));
    // return { ...state, data: checkCollectionRemoveItem };
    default:
      return state;
  }
};

export { rootReducer, initialState };
