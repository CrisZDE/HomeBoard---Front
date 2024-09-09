export const BASE_URL = "http://localhost:3001";

//public endpoints
export const PUBLIC_URL = `${BASE_URL}/auth`;
export const LOGIN_URL = `${PUBLIC_URL}/login`;
export const SINGIN_URL = `${PUBLIC_URL}/singin`;

//private endpoints 
export const PRIVATE_URL = `${BASE_URL}/api`;
export const GET_PUBLIC_IDEAS_URL = `${PRIVATE_URL}/public`;
export const GET_BOARDS_URL = `${PRIVATE_URL}/board`;
export const getBoardByIdUrl = (id) => `${PRIVATE_URL}/board/${id}`;
export const getUserIdeas =(userId, categoryId) => `${PRIVATE_URL}/user/${userId}/category/${categoryId}`;
export const NEW_IDEA_URL = `${PRIVATE_URL}/idea`;
export const getUpdateIdeaUrl = (id) => `${PRIVATE_URL}idea/update/${id}`;
export const getDeleteIdeaUrl = (id) => `${PRIVATE_URL}/idea/delete/${id}`;
