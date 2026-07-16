import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard.service";

function Dashboard() {
    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const response = await getDashboard();
            setDashboard(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to load dashboard");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <h1 className="text-center mt-20 text-2xl">
                Loading...
            </h1>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <h1 className="text-4xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-gray-500">Total Habits</h2>
                    <p className="text-4xl font-bold">
                        {dashboard.totalHabits}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-gray-500">Completed</h2>
                    <p className="text-4xl font-bold text-green-600">
                        {dashboard.completedHabits}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-gray-500">Pending</h2>
                    <p className="text-4xl font-bold text-red-600">
                        {dashboard.pendingHabits}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-gray-500">Completion Rate</h2>
                    <p className="text-4xl font-bold text-blue-600">
                        {dashboard.completionRate}%
                    </p>
                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6 mt-8">

                <h2 className="text-2xl font-bold mb-4">
                    Recent Habits
                </h2>

                {dashboard.recentHabits.map((habit) => (
                    <div
                        key={habit._id}
                        className="border-b py-3 flex justify-between"
                    >
                        <span>{habit.title}</span>

                        <span>
                            {habit.completed ? "✅" : "❌"}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Dashboard;