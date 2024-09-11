import axios from 'axios';

export const apiRequest = async (endpoint, method = "GET", data = null, headers = {}) => {
    try {
        
        const response = await axios({
            url: endpoint,   
            method,          
            data,            
            headers,         
        });
        
        return response.data;
    } catch (error) {
        console.error("API request error:", error);

        if (error.response) {
            console.error("Server response:", error.response);
            throw new Error(error.response.data.message || "Something went wrong");
        } else if (error.request) {
            console.error("No response received:", error.request);
            throw new Error("No response received from server");
        } else {
            console.error("Error message:", error.message);
            throw new Error(error.message);
        }
    }
};