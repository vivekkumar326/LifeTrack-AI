import { useEffect, useState } from "react";

import HabitForm from "../components/habits/HabitForm";
import HabitList from "../components/habits/HabitList";

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

        try {
            if (editingId) {
                await updateHabit(editingId, formData);
            } else {
                await createHabit(formData);
            }

            resetForm();
            loadHabits();

        } catch (error) {
            console.error("Full Error:", error);

            if (error.response) {
                console.log("Backend Response:", error.response.data);
                console.log("Status:", error.response.status);

                alert(error.response.data.message || "Backend Error");
            } else {
                alert(error.message);
            }
        }
    };

    const handleComplete = async (id) => {
        try {
            await completeHabit(id);
            loadHabits();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        const ok = window.confirm("Delete this habit?");

        if (!ok) return;

        try {
            await deleteHabit(id);
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
        <div className="min-h-screen bg-slate-100 p-8">

            <h1 className="text-4xl font-bold mb-8">
                My Habits
            </h1>

            <HabitForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={editingId !== null}
                handleCancel={resetForm}
            />

            <HabitList
                habits={habits}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />

        </div>
    );
}

export default Habits;