import React, { createContext } from "react";
import Acomp from "./Acomp";
import Ecomp from "./Ecomp";

const Name = createContext();

export default function Parent(){
    const n = "Indumati";

    return(
        <>
            <h1>This is Parent Component</h1>
            <Name.Provider value={n}>
                <Acomp/>
            </Name.Provider>
        </>
    )
}

export {Name};