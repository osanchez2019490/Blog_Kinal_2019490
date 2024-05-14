import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.31.135:8080/opinionManager/v1',
    timeout: 5000
})

export const commentPost = async (data) => {
    try {
        return await apiClient.post('/comment', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const commentPut = async (id, data) => {
    try {
        return await apiClient.put(`/comment/${id}`, data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const commentById = async (ipublicationIdd) => {
    try {
        return await apiClient.get(`/comment/${ipublicationIdd}`);
    } catch (e) {
        return {error: true,
        e
        }
    }
}

export const commentDelete = async (id) => {
    try {
        return await apiClient.delete(`/comment/${id}`);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}


export const publicationGet = async () => {
    try {
        return await apiClient.get('/publication')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}



export const publicationById = async (publicationId) => {
    try {
        return await apiClient.get(`/publication/${publicationId}`);
    } catch (e) {
        return {error: true,
        e
        }
    }
}