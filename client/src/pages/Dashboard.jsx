import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg text-gray-500">
                        Total Habits
                    </h2>

                    <p className="text-4xl font-bold mt-3">
                        12
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg text-gray-500">
                        Completed
                    </h2>

                    <p className="text-4xl font-bold mt-3 text-green-600">
                        8
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg text-gray-500">
                        Pending
                    </h2>

                    <p className="text-4xl font-bold mt-3 text-red-600">
                        4
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg text-gray-500">
                        Completion Rate
                    </h2>

                    <p className="text-4xl font-bold mt-3 text-blue-600">
                        67%
                    </p>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;