import { useContext } from "react";
import { DarkLightContext } from "../../context";

const Navbar= () => {
    const { darkMode, toggleDarkMode} = useContext(DarkLightContext)
    const handleToggleDarkMode = () => { 
        toggleDarkMode()
    }
    
    return(
        <div className={darkMode ? "w-screen z-10 bg-gray-800 top-0" : "w-screen z-10 bg-blue-800 top-0"}>
            <div className="flex justify-between place-items-center py-1 px-4 md:flex md:justify-between md:px-6 md:py-4 md:place-items-center">
                <h1 className="text-3xl md:text-2xl font-bold mr-4 text-white font-poppins">AnimeList</h1>
                <div className="flex flex-row place-items-center space-x-10">
                    <ul className="hidden md:flex space-x-3">
                        <li className="text-white font-poppins bg-blue-600 w-36 text-center py-2 rounded-lg"><a href="/">Homepage</a></li>
                        <li className="text-white font-poppins w-36 text-center py-2"><a href="/collection">My Collection</a></li>
                    </ul>

                    <div onClick={() => handleToggleDarkMode()}>
                        <div className={darkMode ? 'flex w-20 h-10 bg-gray-600 m-2 rounded-full transition-all duration-500' :'flex w-20 h-10 bg-blue-600 m-2 rounded-full transition-all duration-500'}>
                            <span className={darkMode ? 'h-10 w-10 bg-white rounded-full ml-10 transition-all duration-500': 'h-10 w-10 bg-white rounded-full transition-all duration-500'}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;