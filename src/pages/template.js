import { useContext } from "react";
import { Navbar, Footer } from "../components";
import { DarkLightContext } from "../context";

function Template({ children }){
    const { darkMode, toggleDarkMode} = useContext(DarkLightContext)
    const handleToggleDarkMode = () => { 
        toggleDarkMode()
    }

    return(
       <>
        <Navbar />
            <div className={darkMode ? "bg-gray-200" : "bg-white"}>
                <div className="h-max">
                    {children}
                </div>
            </div>
        <Footer />
       </>
    )
}
export default Template;