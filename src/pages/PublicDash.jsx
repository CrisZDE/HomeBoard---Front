import React, { useEffect, useContext, useState } from "react";
import { NavBar } from "../components/navbar/NavBar";
import { PublicIdea } from "../components/board & idea/PublicIdea";
import { IdeasContext } from "../context/IdeasContext";


export const PublicDash = () => {
    const { publicIdeas, fetchPublicIdeas } = useContext(IdeasContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                await fetchPublicIdeas();
                setLoading(false);
            } catch (error) {
                console.error('Error fetching public ideas:', error);
                setError(error.message);
            }
        };

        fetchIdeas();
    }, [fetchPublicIdeas]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<>
        <NavBar/>
        <div className=" grid grid-cols-6 gap-5 m-5">

            {publicIdeas.lenght === 0 ? (
                <p>No hay ideas públicas aún</p>
            ) : (
                publicIdeas.map((idea)=> <PublicIdea key={idea.id} img={idea.img}/>  )
            )}
        </div>
    </>)
}