function StatsCard({
    title,
    value,
    color = "text-slate-800",
}) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h3 className="text-gray-500 text-sm">
                {title}
            </h3>

            <p className={`text-4xl font-bold mt-3 ${color}`}>
                {value}
            </p>

        </div>
    );
}

export default StatsCard;