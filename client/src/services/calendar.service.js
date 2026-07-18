import api from "./api";

export const getCalendar = async () => {
    const response = await api.get("/calendar");
    return response.data;
};