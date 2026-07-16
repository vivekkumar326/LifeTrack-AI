function Badge({ completed }) {
    return (
        <span
            className={`px-3 py-1 rounded-full text-white text-sm ${completed
                    ? "bg-green-600"
                    : "bg-red-500"
                }`}
        >
            {completed ? "Completed" : "Pending"}
        </span>
    );
}

export default Badge;