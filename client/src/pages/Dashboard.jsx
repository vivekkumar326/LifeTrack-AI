import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDashboard } from "../services/dashboard.service";
import StatsCard from "../components/dashboard/StatsCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import RecentHabits from "../components/dashboard/RecentHabits";

function Dashboard() {
 
    const [stats, setStats] = useState({
        totalHabits: 0,
        completedHabits: 0,
        pendingHabits: 0,
        completionRate: 0,
        recentHabits: [],
    });
    const weeklyData = [
        { day: "Mon", completed: 2 },
        { day: "Tue", completed: 1 },
        { day: "Wed", completed: 3 },
        { day: "Thu", completed: 2 },
        { day: "Fri", completed: 4 },
        { day: "Sat", completed: 5 },
        { day: "Sun", completed: 3 },
    ];

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const response = await getDashboard();
            setStats(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">
                Dashboard
            </h1>
            <div className="grid grid-cols-4 gap-6">

                <StatsCard
                    title="Total Habits"
                    value={stats.totalHabits}
                />

                <StatsCard
                    title="Completed"
                    value={stats.completedHabits}
                    color="text-green-600"
                />

                <StatsCard
                    title="Pending"
                    value={stats.pendingHabits}
                    color="text-red-600"
                />

                <StatsCard
                    title="Completion Rate"
                    value={`${stats.completionRate}%`}
                    color="text-blue-600"
                />

            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">

                <ProgressChart
                    data={weeklyData}
                />

                <RecentHabits
                    habits={stats.recentHabits}
                />

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;