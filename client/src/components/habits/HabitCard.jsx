import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function HabitCard({
    habit,
    handleComplete,
    handleDelete,
    handleEdit,
}) {
    return (
        <Card>

            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                    {habit.title}
                </h2>

                <Badge completed={habit.completed} />

            </div>

            <p className="mt-3 text-gray-600">
                {habit.description}
            </p>

            <div className="mt-4 space-y-2">

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
                    🔥 {habit.streak} Day Streak
                </p>

            </div>

            <div className="flex gap-3 mt-6">

                {!habit.completed && (
                    <Button
                        variant="success"
                        onClick={() => handleComplete(habit._id)}
                    >
                        Complete
                    </Button>
                )}

                <Button
                    variant="primary"
                    onClick={() => handleEdit(habit)}
                >
                    Edit
                </Button>

                <Button
                    variant="danger"
                    onClick={() => handleDelete(habit._id)}
                >
                    Delete
                </Button>

            </div>

        </Card>
    );
}

export default HabitCard;