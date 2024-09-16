import React,{useEffect, useState}from "react";

function Effect() {
    const [apidata, setapidata] = useState([])
    const[count,setcount]=useState(0)

    const handlefetch = async () => {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        setapidata(data)
    }  
    const handleadd=()=>{
        setcount(count+1)
    }

    useEffect(()=>{
           handlefetch()
           
    },[count])
    return (
        <>
            <u><h1 onClick={handleadd}>Product List {count}</h1></u>

            <h1>{apidata.length}products are there</h1>

            {apidata.map((da) => (
                <div>
                    <img src={da.image} height={200} width={200} />
                    <h1>{da.title}</h1>
                    <h2>{da.price}</h2>
                </div>
            ))}
            <button onClick={handlefetch} className="btn btn-primary">Api call</button>
        </>
    )
}
export  default Effect