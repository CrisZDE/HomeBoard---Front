import React from "react";
import { InputForm } from "../input/InputForm";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";
import { apiRequest } from "../../services/apiRequest";
import { LOGIN_URL } from "../../config/urls";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const userData = { email, password };
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        try {
            const response = await apiRequest(LOGIN_URL, "POST", userData, headers);
    
            const { token, id, ...user } = response;
            console.log("API Response:", response);
    
            if (token) {
                const cleanedToken = token.startsWith('Bearer ') ? token.slice(7) : token;
                login(user, cleanedToken);
                const userId = id;
                localStorage.setItem('userId', userId);
                alert("Login successful!");
    
                navigate('/public'); 
            } else {
                alert("Login failed: No token received.");
            }
        } catch (error) {
            console.error("API Error:", error);
            alert(`Login failed: ${error.message}`);
        }
    };

    return (
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div >
            <InputForm
                label="Email"
                id="email"
                type="email"
                placeholder="Email"
                width="32.25rem"
                error={errors.email?.message}
                {...register("email", {
                    required: "Debes escribir un email",
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Email no válido"
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
                    required: "Debes escribir una contraseña",
                    minLength: {
                        value: 8,
                        message: "La contraseña debe tener al menos 8 caracteres"
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
            <p className="text-olive text-[1rem] mt-7 w-[32.75rem] text-center">¿No tienes cuenta? Accede <Link to="/signin" className="text-terracota">aquí</Link>.</p>
        </div>
        </form>
    );
};