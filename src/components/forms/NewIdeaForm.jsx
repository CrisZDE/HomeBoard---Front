import React, { useContext, useState } from "react";
import { InputForm } from "../input/InputForm";
import { Button } from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import { uploadImageToCloudinary } from "../../services/cloudinaryService";
import { apiRequest } from "../../services/apiRequest";
import { IdeasContext } from "../../context/IdeasContext";
import { useForm } from "react-hook-form";
import { NEW_IDEA_URL } from "../../config/urls";
// import { AuthContext } from "../../auth/AuthProvider";

export const NewIdeaForm = ()=> {

    // const { user } =useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [fileName, setFileName] = useState("Sube una imagen...");
    const [imageUrl, setImageUrl] = useState(null);
    const { refreshIdeas, boards } = useContext(IdeasContext);
    const [categoryId, setCategoryId] = useState("");
    const userId = localStorage.getItem('userId');
    console.log(userId)

    const handleClose = ()=>{
        navigate('/board')
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const uploadedImageUrl = await uploadImageToCloudinary(file);
                setFileName(file.name);
                setImageUrl(uploadedImageUrl);
            } catch (error) {
                alert(error.message); 
                setFileName("Sube una imagen...");
                e.target.value = ''; 
            }
        }
    };


    const onSubmit = async (data) => {
        const {title, notes, url1, url2, category_id}= data;
        console.log(data);
        
        console.log('userId:', userId);
        const cleanedData = {
            title: title.trim(),
            notes: notes.trim(),
            img: imageUrl,
            url1: url1.trim(),
            url2: url2.trim(),
            user: {
                id: userId
            },
            board: {
                id: category_id
            }
        };
        console.log('Cleaned Data:', cleanedData); // Verifica los datos limpiados

        const token = localStorage.getItem('authToken')
            
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            try {

                const response = await apiRequest( NEW_IDEA_URL, 'POST', cleanedData, headers);
                console.log('Api response: ', response);
                const successMessage = "Nueva idea creada con éxito";
                alert(successMessage);
                await refreshIdeas();
            } catch (error){
                console.error("API Error:", error);
                alert(`Error: ${error.response?.data?.message || error.message}`);
            }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <select 
                    {...register("category_id", { required: "Selecciona una categoría" })}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-[46.25rem] h-[2.75rem] pl-4 rounded-[0.9rem] bg-green placeholder:text-dark placeholder:font-sans">
                        <option value="" className="text-dark">Selecciona una categoría</option>
                        {boards.map(board => (
                            <option key={board.id} value={board.id} className="text-dark">{board.category}</option>
                        ))}
                    </select>
                </div>

                <InputForm 
                label="Título: "
                inputClassName="text"
                id="text"
                type="text"
                name="title"
                placeholder="Indica el título de la imagen"
                width="46.25rem"
                {...register("title", {
                    required: "El título es requerido",
                    maxLength: {
                        value: 100,
                        message: "El título no debe pasar de 100 caracteres"
                    }
                })}/>
                {errors.title && <span>{errors.title.message}</span>}
                <InputForm 
                label="Imagen: "
                inputClassName="image"
                id="image"
                accept="image/*"
                type="file"
                name="img"
                placeholder="Añade la imagen"
                width="46.25rem"
                onInput={handleFileChange}
                />

                <InputForm
                label="Notas: "
                inputClassName="textarea"
                id="textarea"
                type="textarea"
                placeholder="¿Qué te inspira de esta imagen?"
                width="46.25rem"
                error={errors.notes?.message}
                {...register("notes", {
                    required: "Debes escribir una descripción",
                    maxLength: {
                        value: 500,
                        message: "La descripción no debe pasarse de más de 500 caracteres"
                    }
                })}
            />

                <InputForm 
                label="Direección web: "
                inputClassName="web"
                id="web"
                type="url"
                placeholder="Añade una web"
                width="46.25rem"
                {...register("url1")}/>

                <InputForm 
                label="Direección web: "
                inputClassName="web"
                id="web"
                type="url"
                placeholder="Añade una web"
                width="46.25rem"
                {...register("url2")}/>

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
                    content="Cancelar"
                    onClick={handleClose}/>
                    <Button
                    width="20rem"
                    bgColor="olive"
                    textColor="light"
                    type="submit"
                    content="Crear"/>
                </div>
            
            </div>
        </form>
    )
}