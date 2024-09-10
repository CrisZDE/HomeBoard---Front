import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";

export const Idea = () => {
    return (<>
    <NavBar/>
    <Subtitle
    text="Título de Idea"
    path="/board"/>
    </>)
}