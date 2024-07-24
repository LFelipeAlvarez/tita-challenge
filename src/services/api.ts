import { APP_ID } from "../config";
import { ApiError, OwnerInfo, PostT } from "../types";

const BASE_URL = 'https://dummyapi.io/data/v1';

const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const errorMessage: ApiError = await response.json();
        throw errorMessage
    }
    return response.json();
};

const getPosts = async (limit = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/post?limit=${limit}?page=30`, {
            method: 'GET',
            headers: {
                'app-id': APP_ID
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
};


const getPostsByTag = async (tag = 'human', limit = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/tag/${tag}/post?limit=${limit}?page=0`, {
            method: 'GET',
            headers: {
                'app-id': APP_ID
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
};

const getCommentsData = async (postId: PostT['id']) => {
    try {
        const response = await fetch(`${BASE_URL}/post/${postId}/comment?limit=10`, {
            method: 'GET',
            headers: {
                'app-id': APP_ID
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
};

const getOwnerInfo = async (ownerId: OwnerInfo['id']) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${ownerId}`, {
            method: 'GET',
            headers: {
                'app-id': APP_ID
            },
        });
        return handleResponse(response);
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
};


export { getPosts, getPostsByTag, getCommentsData, getOwnerInfo };
