import React from "react";
import { InputForm } from "../input/InputForm";
import { Button } from "../buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiRequest } from "../../services/apiRequest";
import { SINGIN_URL } from "../../config/urls";


export const SingInForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const {name, email, password} = data;

        const cleanedData = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: password.trim()
        };
        console.log("Request Data:", cleanedData);
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    
        try {
            const response = await apiRequest(SINGIN_URL, "POST", cleanedData, headers);
            alert ("Usuario registrado con éxito");
            navigate ("/");
        }catch (error){
            console.error("API request error:", error.response);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    }

    return(
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div >
                <InputForm
                    label="Nombre de usuario"
                    id="nombre"
                    type="text"
                    placeholder="Nombre de usuario"
                    width="32.25rem"
                    error={errors.name?.message}
                        {...register("name", { required: "Se debe indicar un nombre" })}
                />
                <InputForm
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    width="32.25rem"
                    {...register("email", {
                        required: "Se debe indicar un e-mail",
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo electrónico no válido"
                        }
                    })}
                />
                <InputForm
                    label="Contraseña"
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    width="32.25rem"
                    error={errors.password?.message}
                        {...register("password", {
                            required: "Se debe indicar una contraseña",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "La contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
                            }
                        })}
                />
                <Button 
                    width="32.75rem"
                    bgColor="bg-olive"
                    textColor="text-light"
                    type="submit"
                    content="Entrar"
                />
                <p className="text-olive text-[1rem] mt-7 w-[32.75rem] text-center">¿Ya tienes cuenta? Accede <Link to="/" className="text-terracota">aquí</Link>.</p>
            </div>
        </form>
    )
}