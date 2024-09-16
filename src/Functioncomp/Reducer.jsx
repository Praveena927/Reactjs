import React, { useReducer } from "react";

function Reduer() {
    function arith(state, action) {
        if (action.type == "increment") {
            return { count: state.count + 1 }
        }
        if(action.type == "decrement"){
            return { count: state.count - 1 }
        }
        if(action.type == "reset"){
            return { count: 0}
        }

    }



    const [state, dispatch] = useReducer(arith, { count: 0 })
    const handleadd = () => {
        dispatch({ type: "increment" })
    }
    const handlesub = () => {
        dispatch({ type: "decrement" })
    }
    const  handlereset=()=>{
        dispatch({ type: "reset" })
    }
    return (
        <>
            <h1>Count-{state.count}</h1>
            <button onClick={handleadd}>ADD</button>
            <button onClick={handlesub}>SUB</button>
            <button onClick={handlereset}>RESET</button>

        </>
    )
}export  default Reduer