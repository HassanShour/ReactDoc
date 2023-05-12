import React from "react";


const MapList = () => {

const ListName = [
    {name:"Fadi",age:"18",job:"Student"},
    {name:"Hassan",age:"35",job:"Doctor"},
    {name:"Andrew",age:"47",job:"Pilot"}
]


const Cards = ListName.map(({name,age,job}) => 

    <div key={Math.random()}>
        <div>
            The age of {name} is: {age}, and his job is: {job}
        </div>
    </div>
 
)



return(
    <div>
        <p>Map:</p>
        {Cards}
        <span><hr/></span>
    </div>
)
}


export default MapList;