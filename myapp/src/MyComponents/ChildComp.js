import React from "react";

export default function ChildComp(props){
    return(
        <>
            <h1>This is Child Component</h1>
            <h2>{props.msg}</h2>
            <h2>Username:{props.un}</h2>
            <h2>Password:{props.pw}</h2>


        </>
    )
}