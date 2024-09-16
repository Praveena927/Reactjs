import React, { useState } from "react";

function ApiCall() {
    const [apidata, setapidata] = useState([])

    const handlefetch = async () => {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        setapidata(data)
    }
    return (
        <div className="ms-5 mt-5">

            <u><h1>Product List</h1></u>

            <h1>{apidata.length}products are there</h1>
            
            {apidata.map((da) => (
                <div>
                    <img src={da.image} height={200} width={200} />
                    <h1>{da.title}</h1>
                    <h2>{da.price}</h2>
                </div>
            ))}
            <button onClick={handlefetch} className="btn btn-primary">Api call</button>
        </div>
    )
}
export default ApiCall