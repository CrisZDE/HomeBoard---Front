import React from "react";
import { InputForm } from "../input/InputForm";
import { Button } from "../buttons/Button";
import { useNavigate } from "react-router-dom";

export const NewIdeaForm = ()=> {
const navigate = useNavigate();

const handleClose = ()=>{
    navigate('/board')
};


    return(
            <div className="relative flex flex-col items-center w-[84rem] mb-10 bg-[#ffffff] m-auto rounded-[0.9rem] my-10 py-10">  
                <button
                type="button"
                onClick={handleClose}
                className="absolute right-7 top-7">
                <img src="/assets/circulo-marca-x.svg" alt="Cerrar formulario" className="w-[2rem]" />
            </button>
            <h1 className="font-serif text-[2rem] mx-auto mb-8 ">Nueva Idea</h1>
            <div className="flex flex-col mb-[1.5rem]">
                <label className="text-dark font-sans font-bold mr-10 pb-[1.03rem]">Board: </label>
                <select className="w-[46.25rem] h-[2.75rem] pl-4 rounded-[0.9rem] bg-green placeholder:text-dark placeholder:font-sans">
                    <option value="">Selecciona una categoría</option>
                    
                </select>
            </div>

                <InputForm 
                label="Título: "
                inputClassName="text"
                id="text"
                type="text"
                placeholder="Indica el título de la imagen"
                width="46.25rem"/>

                <InputForm 
                label="Imagen: "
                inputClassName="image"
                id="image"
                type="url"
                placeholder="Añade la imagen"
                width="46.25rem"/>

                <InputForm 
                label="Notas: "
                inputClassName="textarea"
                id="textarea"
                type="textarea"
                placeholder="¿Qué te inspira de esta imagen?"
                width="46.25rem"
                />

                <InputForm 
                label="Direección web: "
                inputClassName="web"
                id="web"
                type="url"
                placeholder="Añade una web"
                width="46.25rem"/>

                <InputForm 
                label="Direección web: "
                inputClassName="web"
                id="web"
                type="url"
                placeholder="Añade una web"
                width="46.25rem"/>

                <InputForm 
                label="Dirección: "
                inputClassName="location"
                id="location"
                type="street-address"
                placeholder="Añade una ubicación"
                width="46.25rem"/>
            
                <div className=" w-[46.25rem] flex justify-between">
                    <Button
                    width="20rem"
                    bgColor="#DFDAD4"
                    textColor="dark"
                    type="submit"
                    content="Cancelar"/>
                    <Button
                    width="20rem"
                    bgColor="olive"
                    textColor="light"
                    type="submit"
                    content="Crear"/>
                </div>
            
            </div>

            
        
    )
}