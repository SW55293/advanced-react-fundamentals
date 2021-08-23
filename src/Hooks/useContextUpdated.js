// Use Context hook 
// updated previous use context class based components
// to use hooks instead


import React from "react"

import Header from "./Header"
import Button from "./Button"

function App() {
    return (
        <div>
            <Header />
            <Button />
        </div>
    )
}

export default App
// Page 1///////////////////////////////////////////////////////////////////////////////////////
import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Button(props) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button 
            onClick={toggleTheme} 
            className={`${theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button
// Page 2///////////////////////////////////////////////////////////////////////////////////////
import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Header(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme`}>
            <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
    )    
}

export default Header
// Page 3///////////////////////////////////////////////////////////////////////////////////////
import React, {useState} from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
   const [theme, setTheme] = useState("dark")

   
    
    const toggleTheme = () => {
        setTheme(prevTheme => {
            return  prevTheme === "light" ? "dark" : "light"
            
        })
    }
       return (
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        )
    
}

export {ThemeContextProvider, ThemeContext}
// Page 4
