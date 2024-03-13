import api from "./apiConfig.js";

export const getB17s = async () => {
  try {
    const response = await api.get("/b17s");
    return response.data;
  } catch (error) {
    console.error("Error Getting all B17s: ", error);
  }
};

export const getB17 = async (id) => {
    try {
        const response = await api.get(`/b17s/${id}`)
        return response.data
    } catch (error) {
        console.error("Error Getting all B17s: ", error);
    }
};

export const createB17 = async (b17Data) => {
    try {
        const response = await api.post("/b17s", b17Data)
        return response.data
    } catch (error) {
        console.error("Error Getting all B17s: ", error);
    }
};

export const editB17 = async (id, b17Data) => {
    try {
        const response = await api.put(`/b17s/${id}`, b17Data)
        return response.data
    } catch (error) {
        console.error("Error Getting all B17s: ", error); 
    }
};

export const deleteB17 = async (id) => {
    try {
        const response = await api.delete(`/b17s/${id}`)
        return response.data
    } catch (error) {
        console.error("Error Getting all B17s: ", error); 
    }
}
