import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import AnalyticsCard from "../components/analytics/AnalyticsCard";
import CategoryPieChart from "../components/analytics/CategoryPieChart";
import { getAnalytics } from "../services/analytics.service";
import WeeklyProgressChart from "../components/analytics/WeeklyProgressChart";
function Analytics() {

    const [stats, setStats] = useState({
        totalHabits: 0,
        completedHabits: 0,
        pendingHabits: 0,
        completionRate: 0,
        categoryWise: [],
        weeklyProgress: [],
        longestStreak: 0,
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

            <div className="grid grid-cols-5 gap-6">

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

            </div>

            <div className="mt-8 mb-8">
                <WeeklyProgressChart
                    data={stats.weeklyProgress}
                />
            </div>
            

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