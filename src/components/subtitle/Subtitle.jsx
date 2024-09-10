import React from "react";
import { useNavigate } from "react-router-dom";

export const Subtitle = ({text, path, ariaLabel}) =>{
    const navigate = useNavigate();

    
    return(
        <div className="max-w-[90rem] m-auto mt-5 flex">
            <button 
            onClick={() => navigate(path)}>
                <img src="/assets/back.svg" alt="Volver atrás" className="w-8 mr-5" />
            </button>
            <h2  className="font-serif text-4xl text-dark">{text}</h2>
        </div>
    )
}