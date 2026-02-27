import { useState } from "react";

function MyState(){
    const [name, setName] = useState('bike');
    const [count, setCount]= useState(0);

    function changeName(){
        if (name === "bike"){
        setName("car");
        }else{
            setName("bike");
            }
        setCount(count+1);    
    }

    return(
        <div>
        <h1>Item: {name}</h1>
        <button onClick={changeName}>Change {count}</button>
        </div>
    )


}

export default MyState;