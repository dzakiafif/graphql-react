import { createContext, useReducer, useState, useEffect } from "react";
import { rootReducer, initialState } from "../reducer";

const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

export const AnimeContext = createContext(initialState);
export const DarkLightContext = createContext(initialTheme);

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
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme("dark")
    }
  
    return (
      <DarkLightContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </DarkLightContext.Provider>
    )
  }