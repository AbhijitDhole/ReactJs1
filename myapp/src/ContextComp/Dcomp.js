import React, { useContext } from "react";
import Ecomp from "./Ecomp";
import { Name } from "./Parent";

export default function Dcomp(){
    const user=useContext(Name)
    return(
        <>
            <h1>This is D Component</h1>
            <h1>{user}</h1>
            <Ecomp/>
        </>
    )
}