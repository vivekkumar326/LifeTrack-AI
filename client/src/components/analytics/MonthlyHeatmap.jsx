import { useMemo, useState } from "react";

function MonthlyHeatmap({ data }) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [search, setSearch] = useState("");

    const activityMap = useMemo(() => {
        const map = {};

        data.forEach((item) => {
            map[item.date] = item;
        });

        return map;
    }, [data]);

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startWeekday = firstDay.getDay();

    const cells = [];

    // Empty cells
    for (let i = 0; i < startWeekday; i++) {
        cells.push(null);
    }

    // Month days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateString = date.toISOString().split("T")[0];

        const record = activityMap[dateString];

        cells.push({
            day,
            date: dateString,
            count: record?.count || 0,
            habits: record?.habits || [],
        });
    }

    const monthlyCompleted = cells.reduce(
        (sum, cell) => sum + (cell?.count || 0),
        0
    );

    const activeDays = cells.filter(
        (cell) => cell && cell.count > 0
    ).length;

    const bestDay = Math.max(
        ...cells.map((cell) => cell?.count || 0),
        0
    );

    const completionRate =
        daysInMonth > 0
            ? Math.round((activeDays / daysInMonth) * 100)
            : 0;

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
                Monthly Habit Heatmap
            </h2>

            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Search habit..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-72 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

                <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600">Completed</p>
                    <h3 className="text-2xl font-bold text-blue-600">
                        {monthlyCompleted}
                    </h3>
                </div>

                <div className="bg-green-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600">Active Days</p>
                    <h3 className="text-2xl font-bold text-green-600">
                        {activeDays}
                    </h3>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600">Best Day</p>
                    <h3 className="text-2xl font-bold text-purple-600">
                        {bestDay}
                    </h3>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600">Completion</p>
                    <h3 className="text-2xl font-bold text-orange-600">
                        {completionRate}%
                    </h3>
                </div>

            </div>

            {/* Month Navigation */}

            <div className="flex items-center justify-between mb-6">

                <button
                    onClick={() =>
                        setCurrentMonth(new Date(year, month - 1, 1))
                    }
                    className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                    ◀
                </button>

                <select
                    value={month}
                    onChange={(e) =>
                        setCurrentMonth(
                            new Date(year, Number(e.target.value), 1)
                        )
                    }
                    className="border rounded-lg px-3 py-2 font-semibold"
                >
                    {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ].map((monthName, index) => (
                        <option key={index} value={index}>
                            {monthName} {year}
                        </option>
                    ))}
                </select>

                <button
                    onClick={() =>
                        setCurrentMonth(new Date(year, month + 1, 1))
                    }
                    className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                    ▶
                </button>

            </div>

            {/* Week Days */}

            <div className="grid grid-cols-7 gap-2 mb-3 text-center font-semibold text-gray-600">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>

            {/* Calendar */}

            <div className="grid grid-cols-7 gap-2">

                {cells.map((cell, index) => {

                    if (!cell) {
                        return (
                            <div
                                key={index}
                                className="w-9 h-9"
                            />
                        );
                    }         

                    let bg = "bg-gray-100";

                    const matched =
                        search.trim() === "" ||
                        (cell.habits ?? []).some((habit) =>
                            habit.toLowerCase().includes(search.toLowerCase())
                        );

                    if (cell.count >= 1) bg = "bg-green-200";
                    if (cell.count >= 2) bg = "bg-green-400";
                    if (cell.count >= 3) bg = "bg-green-600";
                    if (cell.count >= 4) bg = "bg-green-800";

                    const today = new Date();

                    const isToday =
                        today.getFullYear() === year &&
                        today.getMonth() === month &&
                        today.getDate() === cell.day;

                    const isSelected =
                        selectedDay?.date === cell.date;

                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedDay(cell)}
                            title={`${cell.date}
${cell.count} Habit${cell.count !== 1 ? "s" : ""} Completed`}
                            className={`${matched ? "" : "opacity-30"} w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-md text-sm font-medium ${bg} ${isSelected
                                    ? "ring-2 ring-purple-600 scale-110"
                                    : isToday
                                        ? "ring-2 ring-blue-500 font-bold"
                                        : ""
                                }`}
                        >
                            {cell.day}
                        </div>
                    );
                })}

            </div>

            {/* Legend */}

            <div className="flex items-center justify-end gap-3 mt-6 text-sm text-gray-600 flex-wrap">

                <span>Less</span>

                <div className="w-4 h-4 rounded bg-gray-100"></div>
                <div className="w-4 h-4 rounded bg-green-200"></div>
                <div className="w-4 h-4 rounded bg-green-400"></div>
                <div className="w-4 h-4 rounded bg-green-600"></div>
                <div className="w-4 h-4 rounded bg-green-800"></div>

                <span>More</span>

            </div>

            {/* Selected Day Details */}

            {selectedDay && (
                <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">

                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">
                            {selectedDay.date}
                        </h3>

                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                            {selectedDay.count} Completed
                        </span>
                    </div>

                    {selectedDay.habits.length > 0 ? (
                        <>
                            <h4 className="font-semibold text-gray-700 mb-2">
                                Completed Habits
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {selectedDay.habits.map((habit, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm"
                                    >
                                        ✓ {habit}
                                    </span>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-6 text-gray-500">
                            No habits completed on this day.
                        </div>
                    )}

                </div>
            )}

        </div>
    );
}

export default MonthlyHeatmap;    