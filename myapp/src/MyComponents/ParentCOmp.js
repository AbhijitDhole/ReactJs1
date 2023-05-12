import React from "react";
import ChildComp from "./ChildComp";

const uname = "Abhijeet"
const paword = "1234"
export default function ParentComp(){
    return(
        <>
            <h1>This is Parent Component</h1>
             <ChildComp msg="This is static data" un={uname} pw = {paword}/>
        </>
    )
}