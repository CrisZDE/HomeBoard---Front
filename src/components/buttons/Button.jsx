import React from "react";

export const Button = ({width="100%", bgColor = "bg-olive", textColor = "text-light", onClick, type="button", content}) =>{

    return(
        <button className={`h-[2.75rem] rounded-[5rem] bg-${bgColor} text-${textColor} font-bold cursor-pointer `}
        style={{ width }}
        type={type}
        onClick={onClick}>
            {content}
        </button>
    )
}