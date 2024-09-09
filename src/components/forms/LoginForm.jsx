import React from "react";
import { InputForm } from "../input/InputForm";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    return (
        <div className="mx-auto">
            <InputForm
                label="Email"
                id="email"
                type="email"
                placeholder="Email"
                width="32.25rem"
            />
            <InputForm
                label="Contraseña"
                id="contraseña"
                type="password"
                placeholder="Contraseña"
                width="32.25rem"
            />
            <Button 
                width="32.75rem"
                bgColor="bg-olive"
                textColor="text-light"
                ariaLabel="Entrar"
                type="button"
                content="Entrar"
            />
            <p className="text-olive text-[1rem] mt-7 w-[32.75rem] text-center">¿No tienes cuenta? Accede <Link to="/singin" className="text-terracota">aquí</Link>.</p>
        </div>
    );
};