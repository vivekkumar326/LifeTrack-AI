import HabitCard from "./HabitCard";

function HabitList({
    habits,
    handleComplete,
    handleDelete,
    handleEdit,
}) {
    if (habits.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow p-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-600">
                    No Habits Found
                </h2>

                <p className="text-gray-500 mt-2">
                    Create your first habit to start tracking your progress.
                </p>
            </div>
        );
    }

    return (
        <>
            {habits.map((habit) => (
                <HabitCard
                    key={habit._id}
                    habit={habit}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </>
    );
}

export default HabitList;