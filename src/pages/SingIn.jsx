import React from "react";
import { SingInForm } from "../components/forms/SignInForm";

export const SigIn = () => {
    return (<>
    <div className="flex w-full h-screen">
    <div className="flex flex-col justify-center w-1/2 pl-16">
        <img src="public/assets/LOGO_HB.svg" alt="Logo HomeBoard" className="h-[9rem] mb-8"/>
        <SingInForm/>
    </div>

        <div className="relative w-1/2 h-[95%] rounded-[0.9rem] mr-5 my-5">
            <h1 className=" absolute bottom-20 left-20 font-serif text-[2.25rem] font-semibold italic text-light">
            Un espacio nuevo comienza <br/>con una idea</h1>
            <img src="/assets/SingInImage.png"  alt="Imagen: Tu espacio te espera, comienza a crear"
                className="h-full w-full object-cover rounded-[0.9rem]"/>
        </div>
    </div>
    
    </>)
}