import React, { useEffect, useState } from "react";
import axios from "axios";
function Grocerycomp() {
    // http://localhost:3000/todoList
    const [grocerydata, setgrocerydata] = useState([])
    const [input, setinput] = useState("")

    const handlefetch = async () => {
        let res = await axios.get("http://localhost:3000/todoList")
        setgrocerydata(res.data)

    }
    useEffect(() => {
        handlefetch()
    }, [grocerydata])

    const handleinput = (e) => {
        setinput(e.target.value)
    }
    const handlepost=async()=>{
        let body={
            task:input
        }
        let post= await axios.post("http://localhost:3000/todoList",body)
    }
    return (
        <>
            <h1>Grocery List</h1>
            <input onChange={handleinput} placeholder="Enter u r grocery product" />
            <button onClick={handlepost} className="ms-4">Submit</button>
            <ol>
                {grocerydata.map((da) => (
                    <div>
                        <li>{da.task}</li>
                    </div>
                ))}
            </ol>
        </>
    )
}
export default Grocerycomp
