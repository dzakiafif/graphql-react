import { createContext, useReducer } from "react";
import { rootReducer, initialState } from "../reducer";

export const AnimeContext = createContext(initialState);

export const AnimeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return (
        <AnimeContext.Provider value={[state, dispatch]}>{children}</AnimeContext.Provider>
    )
}