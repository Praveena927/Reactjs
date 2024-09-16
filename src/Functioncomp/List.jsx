import React, { useState } from "react";

function List() {
    const [Namelist, setNamelist] = useState([
        { id: 1, Name: "priya" },
        { id: 2, Name: "Meena" },
        { id: 3, Name: "Santhiya" }
    ])
   
      return (
        <>
            <h1>Name List</h1>
            {Namelist.map((li, i) => (
                <div>
                <h1> {i + 1}. {li.Name}</h1>
                </div>
            ))}
        </>
    )
}
export default List
