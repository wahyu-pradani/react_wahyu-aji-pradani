import axios from "axios"

export const getForm = () => {
    return axios({
        url: `${import.meta.env.VITE_ENDPOINT_PRODUCTS}/products`,
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const sendForm = (data) => {
    return axios.post(`${import.meta.env.VITE_ENDPOINT_PRODUCTS}/products`,data,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const updateForm = () => {
    return axios.put(`${import.meta.env.VITE_ENDPOINT_PRODUCTS}/products/${data.id}`,data,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const deletedForm = async (id) => {
    return await axios.delete(`${import.meta.env.VITE_ENDPOINT_PRODUCTS}/products/${id}`,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}