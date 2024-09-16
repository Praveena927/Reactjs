import React, { useState } from "react";
 
function Counter(){
    const[Count,setCount]=useState(0)
     
    const handleadd=()=>{
        setCount(Count+1)
    }
    const handlesub=()=>{
        setCount(Count-1)
    }
    return(
        <>
        <input  className="m-5" type="text" placeholder="Enter a Number"/>
        <h1 className=" m-5">Count :{Count} </h1>

        <button onClick={handleadd} className="btn btn-primary m-5">Add</button>
    {Count==0 ? "":
        <button onClick={handlesub} className="btn btn-danger m-5">Sub</button>
}
        </>
    )
}
export default Counter