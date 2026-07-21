import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import AnalyticsCard from "../components/analytics/AnalyticsCard";
import CategoryPieChart from "../components/analytics/CategoryPieChart";
import { getAnalytics } from "../services/analytics.service";
import WeeklyProgressChart from "../components/analytics/WeeklyProgressChart";
import MonthlyHeatmap from "../components/analytics/MonthlyHeatmap";

function Analytics() {

    const [stats, setStats] = useState({
        totalHabits: 0,
        completedHabits: 0,
        pendingHabits: 0,
        completionRate: 0,
        categoryWise: [],
        weeklyProgress: [],
        heatmapData: [],
        longestStreak: 0,
        completedToday: 0,
        bestHabit: null,
        needsAttention: 0,
        totalCompletions: 0,
    });

    useEffect(() => {
        loadAnalytics();
    }, []);

    const loadAnalytics = async () => {
        try {
            const response = await getAnalytics();
            setStats(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">
                Analytics
            </h1>
            <div className="grid grid-cols-9 gap-6">

                <AnalyticsCard
                    title="Total Habits"
                    value={stats.totalHabits}
                />

                <AnalyticsCard
                    title="Completed"
                    value={stats.completedHabits}
                    color="text-green-600"
                />

                <AnalyticsCard
                    title="Pending"
                    value={stats.pendingHabits}
                    color="text-red-600"
                />

                <AnalyticsCard
                    title="Completion Rate"
                    value={`${stats.completionRate}%`}
                    color="text-blue-600"
                />
                <AnalyticsCard
                    title="Longest Streak"
                    value={stats.longestStreak}
                    color="text-orange-600"
                />
                <AnalyticsCard
                    title="Completed Today"
                    value={stats.completedToday}
                    color="text-purple-600"
                />
                <AnalyticsCard
                    title="Best Habit"
                    value={
                        stats.bestHabit
                            ? `${stats.bestHabit.title} (${stats.bestHabit.streak})`
                            : "N/A"
                    }
                    color="text-yellow-600"
                />
                <AnalyticsCard
                    title="Needs Attention"
                    value={stats.needsAttention}
                    color="text-red-500"
                />
                <AnalyticsCard
                    title="Total Completions"
                    value={stats.totalCompletions}
                    color="text-indigo-600"
                />

            </div>

            <div className="mt-8 mb-8">
                <WeeklyProgressChart
                    data={stats.weeklyProgress}
                />
            </div>
            <MonthlyHeatmap data={stats.heatmapData} />
            

            <div className="grid grid-cols-2 gap-6 mt-8">

                <CategoryPieChart
                    data={stats.categoryWise}
                />

                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Category Summary
                    </h2>

                    {stats.categoryWise.length === 0 ? (

                        <p>No Categories Found</p>

                    ) : (

                        stats.categoryWise.map((item) => (

                            <div
                                key={item.category}
                                className="flex justify-between border-b py-3"
                            >

                                <span>{item.category}</span>

                                <span className="font-bold">
                                    {item.count}
                                </span>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Analytics;