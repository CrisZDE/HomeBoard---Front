import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () =>{
    const navigate = useNavigate();

    return(
        <nav className="w-full h-20 ">
        <div className="max-w-[90rem] h-20 flex m-auto justify-between">
            <button onClick={() => navigate('/public')}>
                <img src="/assets/Home.svg" alt="Home Imagen" className="w-[3rem] ml-10"/>
            </button>
            <div className="flex relative items-center mx-5">
                <img src="/assets/Search_Icon.svg" alt="Buscar" className=" absolute w-5 ml-5" />
                <input type="text" placeholder="Buscar" className="w-[70rem]  h-12 px-12 rounded-[5rem] placeholder:text-olive hover:bg-light "/>
            </div>
            <button onClick={() => navigate('/createform')}>
                <img src="/assets/subir-idea.svg" alt="Crear Idea" className="w-9" />
            </button>
            <button onClick={() => navigate('/user')}>
                <img src="/assets/circulo-de-usuario.svg" alt="Crear Idea" className="w-11" />
            </button>

        </div>
        </nav>
    )
}