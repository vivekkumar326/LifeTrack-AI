function HabitCard({
    habit,
    handleComplete,
    handleDelete,
    handleEdit,
}) {
    return (
        <div className="bg-white rounded-xl shadow p-6 mb-5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                    {habit.title}
                </h2>

                <span
                    className={`px-3 py-1 rounded-full text-white ${habit.completed
                            ? "bg-green-600"
                            : "bg-red-500"
                        }`}
                >
                    {habit.completed ? "Completed" : "Pending"}
                </span>
            </div>

            <p className="mt-3 text-gray-700">
                {habit.description || "No description"}
            </p>

            <div className="mt-4 space-y-1">
                <p>
                    <strong>Category:</strong> {habit.category}
                </p>

                <p>
                    <strong>Frequency:</strong> {habit.frequency}
                </p>

                <p>
                    <strong>Target Days:</strong> {habit.targetDays}
                </p>

                <p>
                    <strong>Streak:</strong> 🔥 {habit.streak}
                </p>
            </div>

            <div className="flex gap-3 mt-6">

                {!habit.completed && (
                    <button
                        onClick={() => handleComplete(habit._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                        ✅ Complete
                    </button>
                )}

                <button
                    onClick={() => handleEdit(habit)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                    ✏ Edit
                </button>

                <button
                    onClick={() => handleDelete(habit._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                    🗑 Delete
                </button>

            </div>
        </div>
    );
}

export default HabitCard;