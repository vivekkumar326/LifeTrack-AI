import api from "./api";

// Get All Habits
export const getHabits = async () => {
  const response = await api.get("/habits");
  return response.data;
};

// Create Habit
export const createHabit = async (data) => {
  const response = await api.post("/habits", data);
  return response.data;
};

// Complete Habit
export const completeHabit = async (id) => {
  const response = await api.patch(`/habits/${id}/complete`);
  return response.data;
};

// Delete Habit
export const deleteHabit = async (id) => {
  const response = await api.delete(`/habits/${id}`);
  return response.data;
};

// Update Habit
export const updateHabit = async (id, data) => {
  const response = await api.put(`/habits/${id}`, data);
  return response.data;
};