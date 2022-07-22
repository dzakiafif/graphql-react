import { createContext, useReducer, useState, useEffect } from "react";
import { rootReducer, initialState } from "../reducer";

export const AnimeContext = createContext(initialState);
export const DarkLightContext = createContext();

export const AnimeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
      localStorage.setItem("my-collection", JSON.stringify(state.data));
      console.log("ini ada perubahan");
    }, [state]);

    return (
        <AnimeContext.Provider value={{state, dispatch}}>{children}</AnimeContext.Provider>
    )
}

export const DarkLightProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
  
    return (
      <DarkLightContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkLightContext.Provider>
    )
  }