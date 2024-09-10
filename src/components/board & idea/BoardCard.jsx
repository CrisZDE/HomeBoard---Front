import React from "react";


export const BoardCard = ({board}) =>{

    return(
        <div className="m-5">
            <div className="w-[22rem] h-[19rem] bg-olive rounded-[0.9rem] mb-5">
            </div>
            <h4 className="text-2xl">{board}</h4>
        </div>
    )
}