import React from "react";
import Productcomp from "./Productcomp";
import Homecomp from"./Homecomp";
import Aboutcomp from "./Aboutcomp";
import { BrowserRouter,Routes,Route ,Link} from "react-router-dom";

function Fold(){
    return(
        <BrowserRouter>
       
        <Link to="/">Home </Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Routes>
       <Route path="/" element={<Homecomp/>}/> 
       <Route path="/product" element={ <Productcomp/>}/> 
       <Route path="/about" element={<Aboutcomp/>}/> 
        </Routes>
</BrowserRouter>
    )
}export default Fold