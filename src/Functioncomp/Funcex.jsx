import React, { useState } from "react";

const Funcex=()=>{
    const [name,setname]=useState("priya")
    const [email,setemail]=useState(["praveenabala,praveebalasub"])
    
    const handleclick=()=>{
        setname("meena")
    }

    
    return(
        <>
 <h1>HELLO</h1>
   <h2> {name}</h2>
   <h2>{email[1]}</h2>
    <button onClick={handleclick}>change name</button>

        </>
    )
}
export default  Funcex