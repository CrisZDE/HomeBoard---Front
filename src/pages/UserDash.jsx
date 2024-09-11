import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";
import { BoardCard } from "../components/board & idea/BoardCard";

export const UserDash = () => {
    

    return (<>
    <NavBar></NavBar>
    <Subtitle
    text="Nombre de usuario"
    path="/public"/>
    <div className="grid grid-cols-4 gap-5 m-5">
        <BoardCard
        board="Cocina"/>
        <BoardCard
        board="Cocina"/>
        <BoardCard
        board="Cocina"/>
    </div>
    </>)
}