import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { PublicIdea } from "../components/board & idea/PublicIdea";

export const PublicDash = () => {
    return (<>
    <NavBar/>
    <div className=" m-5 flex flex-wrap justify-between">
        <PublicIdea/> 
        <PublicIdea/>
        <PublicIdea/>
        <PublicIdea/>
        <PublicIdea/>
        <PublicIdea/>
        <PublicIdea/>


    </div>
    </>)
}