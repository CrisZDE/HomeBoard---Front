import React from "react";

export const IdeaOnBoard = ({title, note, img})=>{
    return(
        <div className="w-[30rem] h-[16rem] rounded-[0.9rem] shadow-custom-olive flex justify-bet m-5">
            <div className="bg-light w-[16rem] h-full rounded-[0.9rem] overflow-hidden">
                <img src={img} alt="Idea" className="h-full w-full object-cover rounded-[0.9rem]" />
            </div>
            <div className="w-[14rem] flex flex-col p-4">
                <h4 className="text-2xl font-serif truncate pb-4 text-dark">{title}</h4>
                <p className="text-sm text-justify overflow-hidden text-dark text-ellipsis">{note}</p>
            </div>
        </div>
    )
}