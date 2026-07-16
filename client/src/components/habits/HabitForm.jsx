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

            <input
                type="text"
                name="title"
                placeholder="Habit Title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded p-3 w-full mb-3"
                required
            />

            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded p-3 w-full mb-3"
            />

            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="border rounded p-3 w-full mb-3"
            />

            <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="border rounded p-3 w-full mb-3"
            >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
            </select>

            <input
                type="number"
                name="targetDays"
                value={formData.targetDays}
                onChange={handleChange}
                className="border rounded p-3 w-full mb-4"
            />

            <div className="flex gap-3">

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded"
                >
                    {isEditing ? "Update Habit" : "Create Habit"}
                </button>

                {isEditing && (
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded"
                    >
                        Cancel
                    </button>
                )}

            </div>
        </form>
    );
}

export default HabitForm;