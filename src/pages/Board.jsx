import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";
import { IdeaOnBoard } from "../components/board & idea/IdeaOnBoardCard";

export const Board = () => {
    return (<>
    <NavBar/>
    <Subtitle
    text="Nombre del board"
    path="/user"/>
    <div className=" my-5 mx-20 flex flex-wrap justify-between">
        <IdeaOnBoard
        title="Lampara"
        note="asjdlaksj dñakls jdlkajsdl kñajs ñkl asjd lakjsd lkajsd lkjsd alkjs"
        />
        <IdeaOnBoard
        title="Lampara"
        note="asjdlaksj dñakls jdlkajsdl kñajs ñkl asjd lakjsd lkajsd lkjsd alkjs"
        />
        <IdeaOnBoard
        title="Lampara"
        note="asjdlaksj dñakls jdlkajsdl kñajs ñkl asjd lakjsd lkajsd lkjsd alkjs"
        />
        <IdeaOnBoard
        title="Lampara"
        note="asjdlaksj dñakls jdlkajsdl kñajs ñkl asjd lakjsd lkajsd lkjsd alkjs"
        />
    </div>
    
    </>)
}