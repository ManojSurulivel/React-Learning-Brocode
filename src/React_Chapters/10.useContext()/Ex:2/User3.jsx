import React, {useContext} from 'react';
import { ThemeContext } from './Container';

const User3 = () => {

    const {theme} = useContext(ThemeContext);

    console.log(`contextValue: ${theme}`)

    const textStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    };

  return (
    <div>
      <h1 style={textStyle}>User3</h1>
    </div>
  )
}

export default User3;
