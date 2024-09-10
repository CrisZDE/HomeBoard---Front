import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";

export const Board = () => {
    return (<>
    <NavBar/>
    <Subtitle
    text="Nombre del board"
    path="/user"/>
    </>)
}