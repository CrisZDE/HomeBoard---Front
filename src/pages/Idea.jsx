import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";
import { IdeaCard } from "../components/board & idea/IdeaCard";

export const Idea = () => {
    return (<>
    <NavBar/>
    <Subtitle
    text="Título de Idea"
    path="/board"/>
    <div className="m-10">
        <IdeaCard
        imgSrc=""
        imgAlt=""
        notes="fsjdk skjdflksjd flkjsd flskjdf lskjdfñls kdflksjdf lskjdf sdkfj ñslkdfj sdfj sñldfk jsldkjf sldf"
        url="https://www.zarahome.com/" 
        url2="https://www.zarahome.com/"/>
    </div>
    
    </>)
}