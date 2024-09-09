import React, { createContext, useState, useEffect, useContext } from "react";
import { GET_PUBLIC_IDEAS_URL, GET_BOARDS_URL, getUserIdeas} from "../config/urls";
import { apiRequest } from "../services/apiRequest";
import { AuthContext } from "../auth/AuthProvider";


export const IdeasContext = createContext();


export const IdeasProvider = ({ children }) => {
    const { authToken } = useContext(AuthContext);
    const [publicIdeas, setPublicIdeas] = useState([]);
    const [userIdeas, setUserideas] = useState([]);
    const [boards, setBoards] = useState([]);


    const fetchPublicIdeas = async () => {
        try {
            const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
            const data = await apiRequest(GET_PUBLIC_IDEAS_URL, 'GET', null, headers);
            setPublicIdeas(data)

        } catch (error) {
            console.error('Error fetching public ideas:', error);
        }
    };

    const fetchUserIdeas = async (categoryId) => {
        try {
            const userId = localStorage.getItem("userId");
            const headers = { Authorization: `Bearer ${authToken}` };
            const data = await apiRequest(getUserIdeas(userId, categoryId), 'GET', null, headers);
            setUserideas(data);
        }catch (error){
            console.error("Error fetching user ideas:", error);
        }
    }
    const fetchBoards = async () => {
        try {
            const headers = { Authorization: `Bearer ${authToken}` };
            const data = await apiRequest(GET_BOARDS_URL, 'GET', null, headers);
            setBoards(data);
        } catch (error) {
            console.error("Error fetching boards:", error);
        }
    };

    useEffect(() => {
        if(authToken){
            fetchBoards();
            fetchPublicIdeas();
        }

    }, [authToken]);

    const refreshIdeas = async () => {
        await fetchPublicIdeas();

    };

    return (
        <IdeasContext.Provider value={{
            publicIdeas,
            userIdeas,
            boards,
            fetchPublicIdeas,
            fetchUserIdeas,
            fetchBoards,
            refreshIdeas
        }}>
            {children}
        </IdeasContext.Provider>
    );
};