import React, { useContext, useEffect } from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";
import { BoardCard } from "../components/board & idea/BoardCard";
import { IdeasContext } from "../context/IdeasContext";

export const UserDash = () => {
    const {boards, fetchBoards} = useContext(IdeasContext);
    
    useEffect(()=>{
        fetchBoards();
    }, [])

    return (<>
    <NavBar></NavBar>
    <Subtitle
    text="Nombre de usuario"
    path="/public"/>
    <div className="grid grid-cols-4 gap-5 m-5 ">
    {boards && boards.map(board => (
        <BoardCard
        board={board.category}
        imgSrc=""/>
    ))}
    
        
    </div>
    </>)
}