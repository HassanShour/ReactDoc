import React, { useState } from "react";

export const BackgroundContext = React.createContext();

function BackgroundColorProvider(Props){

    const [color, setColor] = useState("lightBlue");
    const [color2 , setColor2] = useState('lightblue');
    return(
        <BackgroundContext.Provider value={{color,setColor ,color2,setColor2}}>
            {Props.children}
        </BackgroundContext.Provider>
     
    );
}

export default BackgroundColorProvider;