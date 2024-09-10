import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

export const NavBar = () =>{
    const navigate = useNavigate();
    const {authToken, logout} =useContext(AuthContext);
    const isPublicDash = location.pathname === '/public';

    const goToLogout = () => {
        logout();
        navigate('/');
    };

    return(
        <nav className="w-full h-20 ">
        <div className="max-w-[90rem] h-20 flex m-auto justify-between">
            <button onClick={() => navigate('/public')}>
                <img src="/assets/Home.svg" alt="Home Imagen" className="w-[2.8rem] "/>
            </button>
            <div className="flex relative items-center mx-5">
                <img src="/assets/Search_Icon.svg" alt="Buscar" className=" absolute w-5 ml-5" />
                <input type="text" placeholder="Buscar" className="w-[70rem]  h-12 px-12 rounded-[5rem] placeholder:text-olive hover:bg-light "/>
            </div>
            <button onClick={() => navigate('/createform')}>
                <img src="/assets/subir-idea.svg" alt="Crear Idea" className="w-8" />
            </button>
            {isPublicDash ? (
                    <button onClick={() => navigate('/user')}>
                        <img src="/assets/circulo-de-usuario.svg" alt="Ir al dashboard del usuario" className="w-10" />
                    </button>
                ) : (
                    <button onClick={goToLogout}>
                        <img src="/assets/Logout_Icon.svg" alt="Salir de la aplicación" className="w-10" />
                    </button>
                )}

        </div>
        </nav>
    )
}