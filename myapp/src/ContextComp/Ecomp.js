import React from "react";
import { Name } from "./Parent";

export default function Ecomp(){
    return(
        <>
            <h1>This is E Component</h1>
            <Name.Consumer>
                {
                    nam =>{
                        return <h1>{nam}</h1>
                    }
                }
            </Name.Consumer>
        </>
    )
}