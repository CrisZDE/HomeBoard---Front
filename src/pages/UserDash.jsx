import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";

export const UserDash = () => {
    

    return (<>
    <NavBar></NavBar>
    <Subtitle
    text="Nombre de usuario"
    path="/public"
    ariaLabel="Volver al Dashboard Público"/>
    </>)
}