import React, {useContext} from "react";
import BackgroundColorProvider, { BackgroundContext } from "../Hooks/BackgroundUseContext";

export function Provider(){

    return(
    <>
        <BackgroundColorProvider>
        <Consumer/>
        <Consumer2/>
        </BackgroundColorProvider>
        <hr/>
    </>
    )
    }

function Consumer (){

        const color = useContext(BackgroundContext);


return(
    <div style={{backgroundColor:color.color}}>
    <h1>First Child is using background color from CONTEXT</h1>
    </div>
)
    }

 function Consumer2 (){
    
    const color = useContext(BackgroundContext);

    return(
        <div style={{backgroundColor:color.color2}}>
        <h1>Second Child is using background color 2 from CONTEXT </h1>
        </div> 
    )
}