import { useEffect } from "react";
import { useState } from "react";



function MyEffect(){
    const [color, setColor]= useState("black");
    useEffect(()=> {document.getElementById("col").style.color = color;},[color]);

    return(
        <div>
            <h1 id="col">Color</h1>
            <button onClick={()=> setColor("green")}>green</button>
            <button onClick={()=> setColor("White")}>White</button>
        </div>
    );
}

export default MyEffect;