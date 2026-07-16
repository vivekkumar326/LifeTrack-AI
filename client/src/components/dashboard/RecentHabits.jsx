import Card from "../ui/Card";

function RecentHabits({ habits }) {
    return (
        <Card>

            <h2 className="text-xl font-bold mb-5">
                Recent Habits
            </h2>

            {habits.length === 0 ? (
                <p className="text-gray-500">
                    No habits found.
                </p>
            ) : (
                habits.map((habit) => (
                    <div
                        key={habit._id}
                        className="border-b py-3 last:border-none"
                    >
                        <h3 className="font-semibold">
                            {habit.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {habit.category}
                        </p>

                        <span
                            className={`text-sm font-medium ${habit.completed
                                    ? "text-green-600"
                                    : "text-red-500"
                                }`}
                        >
                            {habit.completed
                                ? "Completed"
                                : "Pending"}
                        </span>

                    </div>
                ))
            )}

        </Card>
    );
}

export default RecentHabits;