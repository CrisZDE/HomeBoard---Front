import React from "react";
import { LoginForm } from "../components/forms/LoginForm";

export const Login = () => {
    return (<>
    <div className="flex w-full h-screen">
        <div className="flex flex-col justify-center w-1/2 pl-16">
        <img src="/assets/LOGO_HB.svg" alt="Logo HomeBoard" className="h-[9rem] mb-8"/>
        <LoginForm/>
    </div>

        <div className="relative w-1/2 h-[95%] rounded-[0.9rem] mr-5 my-5">
            <h1 className=" absolute bottom-20 left-20 font-serif text-[2.25rem] font-semibold italic ">Tu espacio te espera,<br/> comienza a crear</h1>
            <img src="/assets/LoginImage.png"  alt="Imagen: Tu espacio te espera, comienza a crear"
                className="h-full w-full object-cover rounded-[0.9rem]"/>
        </div>
    </div>
    </>)
}


