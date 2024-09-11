import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Subtitle } from "../components/subtitle/Subtitle";
import { IdeasContext } from "../context/IdeasContext";
import { IdeaOnBoard } from "../components/board & idea/IdeaOnBoardCard";

export const UserDash = () => {
    const {userIdeas, fetchUserIdeas} = useContext(IdeasContext);
    const [ideas, setIdeas] = useState([]);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                await fetchUserIdeas();

            }catch (error) {
                console.error('Error al obtener las ideas del usuario:', error);
                setError("Error al obtener las ideas.");
        };
    }
    fetchIdeas();
    }, [fetchUserIdeas]);


    if (error) return <p>{error}</p>;


    return (<>
        <NavBar></NavBar>
        <Subtitle
        text="Nombre de usuario"
        path="/public"/>
            <div className="my-5 mx-20 grid grid-cols-3 gap-5 m-5">
            {userIdeas.length > 0 ? (
                        userIdeas.map((idea) => (
                            <IdeaOnBoard
                                key={idea.id}
                                title={idea.title}
                                note={idea.notes}
                                img={idea.img} // Si `IdeaOnBoard` tiene imagen
                            />
                        ))
                    ) : (
                        <p>No hay ideas disponibles</p>
                    )}
            
        </div>
    </>)
}