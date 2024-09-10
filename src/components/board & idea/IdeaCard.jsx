import React from "react";
import { useNavigate } from "react-router-dom";

export const IdeaCard = ({notes, imgSrc, imgAlt, url, url2})=> {
    const navigate = useNavigate();

    return(
        <div className="w-[90rem] h-[43rem] rounded-[0.9rem] shadow-custom-olive flex justify-bet m-auto">
            <div className="bg-light w-[50rem] h-full rounded-[0.9rem] overflow-hidden flex items-center justify-center">
                <img 
                    src={imgSrc}
                    alt={imgAlt} 
                    className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col mx-5 w-full">
                <div className="m-5 flex justify-end" >
                    <button className="ml-5 w-8" >
                        <img src="/assets/Delete_Icon.svg" alt="Borrar Idea" />
                    </button>
                    <button className="ml-5 w-8" onClick={() => navigate('/editform')}>
                        <img src="/assets/Edit_Icon.svg" alt="Editar Idea" />
                    </button>
                    <button className="ml-5 w-8">
                        <img src="/assets/Public_Icon.svg" alt="Publicar Idea" />
                    </button>
                </div>

                <div>
                    <p className="text-sm text-justify overflow-hidden text-dark text-ellipsis min-h-[8rem]">{notes}</p>
                    <br /><a href={url} className="text-terracota text-decoration: underline " target="_blank" rel="noopener noreferrer">{url}</a>
                    <br /><br /><a href={url2} className="text-terracota text-decoration: underline" target="_blank" rel="noopener noreferrer">{url2}</a>
                </div>
            </div>
        </div>
    )
}