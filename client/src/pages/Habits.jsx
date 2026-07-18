import { useEffect, useState } from "react";

import HabitForm from "../components/habits/HabitForm";
import HabitList from "../components/habits/HabitList";
import DashboardLayout from "../layouts/DashboardLayout";
import toast from "react-hot-toast";

import {
    getHabits,
    createHabit,
    completeHabit,
    deleteHabit,
    updateHabit,
} from "../services/habit.service";

function Habits() {
    const [habits, setHabits] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        frequency: "Daily",
        targetDays: 30,
    });

    useEffect(() => {
        loadHabits();
    }, []);
    const loadHabits = async () => {
        try {
            const response = await getHabits();
            setHabits(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            category: "",
            frequency: "Daily",
            targetDays: 30,
        });

        setEditingId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        

        try {
            if (editingId) {
                await updateHabit(editingId, formData);
                toast.success("Habit updated successfully");
            } else {
                await createHabit(formData);
                toast.success("Habit created successfully");
            }

            resetForm();
            loadHabits();

        } catch (error) {
            console.error(error);

            if (error.response) {
                toast.error(error.response.data.message || "Backend Error");
            } else {
                toast.error(error.message);
            }

        } finally {
            setLoading(false);
        }
    };

    const handleComplete = async (id) => {
        try {
            await completeHabit(id);
            toast.success("Habit completed 🎉");
            loadHabits();
        } catch (error) {
            console.error(error);
            toast.error("Failed to complete habit");
        }
    };

    const handleDelete = async (id) => {
        const ok = window.confirm("Delete this habit?");

        if (!ok) return;

        try {
            await deleteHabit(id);
            toast.success("Habit deleted");
            loadHabits();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (habit) => {
        setEditingId(habit._id);

        setFormData({
            title: habit.title,
            description: habit.description,
            category: habit.category,
            frequency: habit.frequency,
            targetDays: habit.targetDays,
        });
    };

    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">
                My Habits
            </h1>

            <HabitForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={editingId !== null}
                handleCancel={resetForm}
                loading={loading}
            />

            <HabitList
                habits={habits}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />

        </DashboardLayout>
    
    );
}

export default Habits;