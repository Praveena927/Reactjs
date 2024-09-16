import React, { useState } from "react";
import "./Bday.css"

function Bday() {
    const [blist, setblist] = useState([
        {
            id: 1,
            name: 'Bertie Yates',
            age: 29,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
            id: 2,
            name: 'Hester Hogan',
            age: 32,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
            id: 3,
            name: 'Larry Little',
            age: 36,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
            id: 4,
            name: 'Sean Walsh',
            age: 34,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
            id: 5,
            name: 'Lola Gardner',
            age: 29,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },]);
        const handleclick=()=>{
            setblist([])
        }
    return (
        <div className="bg1">
            <div className="bg2">
            <h1 className="h1">{blist.length}Birthdays today</h1>
            {blist.map((bd)=>(
                <div>
                    <img src={bd.image} className="img" />
                    <div className="div">
                    <h2 className="name">{bd.name}</h2>
                    <h2 className="age">{bd.age}</h2>
                    </div>
                </div>
            ))}
            <button onClick={handleclick} className="btn">Clear All</button>
            </div>
        </div>
    )
}
export default Bday