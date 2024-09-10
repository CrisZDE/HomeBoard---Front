import React from "react";
import { useNavigate } from "react-router-dom";

export const PublicIdea = () =>{
    const navigate = useNavigate();

    return(
        <div className="relative w-[16rem] h-[16rem] rounded-[0.9rem] bg-olive m-5">
            <button className="absolute w-10 left-[12.5rem] mt-4" onClick={() => navigate('/saveform')}>
                <img src="/assets/SaveIdea_Icon.svg" alt="Corazón para guardar la idea" />
            </button>
        </div>
    )
}