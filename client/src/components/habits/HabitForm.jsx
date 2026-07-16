import Button from "../ui/Button";
import Input from "../ui/Input";

function HabitForm({
    formData,
    handleChange,
    handleSubmit,
    isEditing,
    handleCancel,
}) {
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-6 mb-8"
        >
            <h2 className="text-2xl font-bold mb-5">
                {isEditing ? "Edit Habit" : "Add New Habit"}
            </h2>

            {/* Habit Title */}
            <Input
                name="title"
                placeholder="Habit Title"
                value={formData.title}
                onChange={handleChange}
            />

            <div className="mb-3"></div>

            {/* Description */}
            <Input
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <div className="mb-3"></div>

            {/* Category */}
            <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mb-3"
            >
                <option value="">Select Category</option>
                <option value="Health">Health</option>
                <option value="Fitness">Fitness</option>
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Finance">Finance</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option>
            </select>

            {/* Frequency */}
            <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mb-3"
            >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>

            {/* Target Days */}
            <Input
                name="targetDays"
                type="number"
                placeholder="Target Days"
                value={formData.targetDays}
                onChange={handleChange}
            />

            <div className="mt-5 flex gap-3">
                <Button
                    type="submit"
                    variant="primary"
                >
                    {isEditing ? "Update Habit" : "Create Habit"}
                </Button>

                {isEditing && (
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                )}
            </div>
        </form>
    );
}

export default HabitForm;