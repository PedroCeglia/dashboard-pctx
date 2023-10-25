import { useContext, useState, createContext } from "react";
import darkTheme from "../../styles/Theme/themes/dark";
import lightTheme from "../../styles/Theme/themes/light";

const ThemeContext = createContext(darkTheme)

export default function ThemeProvider({children}){
    const [ theme, setTheme ] = useState(darkTheme)

    function handlerTheme(type){
        setTheme("dark" !== type ? darkTheme : lightTheme)
    }

    return(
        <ThemeContext.Provider value={{theme, handlerTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)