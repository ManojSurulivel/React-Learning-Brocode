import React,{useState, createContext} from 'react'
import User1 from './User1';


export const ThemeContext = createContext();

const Container = () => {
    const [theme,setTheme] = useState("dark");
    
    const toggleTheme = () => {
        setTheme((curr) => (curr === " light" ? "dark" : "light"));
    }

  return (

  <ThemeContext.Provider 
    value={{
         theme:theme,
         }}
  >

    <button onClick={toggleTheme}>Toggle Theme</button>
    <h1>Container</h1>
    <User1 />
 </ThemeContext.Provider>

  )
}

export default Container
