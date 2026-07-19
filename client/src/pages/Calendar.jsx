import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendar } from "../services/calendar.service";
import { useEffect, useState } from "react";

function Calendar() {

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [currentDate, setCurrentDate] = useState(new Date());
    const [history, setHistory] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHabits, setSelectedHabits] = useState([]);

    const month = currentDate.toLocaleString("default", {
        month: "long",
    });

    const year = currentDate.getFullYear();

    const daysInMonth = new Date(
        year,
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDay = new Date(
        year,
        currentDate.getMonth(),
        1
    ).getDay();

    const prevMonth = () => {
        setCurrentDate(
            new Date(year, currentDate.getMonth() - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(year, currentDate.getMonth() + 1, 1)
        );
    };

    const loadCalendar = async () => {
       
        try {
            const response = await getCalendar();
            console.log(response.data);
            setHistory(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadCalendar();
    }, []);

    return (
        <div className="p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">

                <h1 className="text-3xl font-bold">
                    Habit Calendar
                </h1>

                <div className="flex items-center gap-4">

                    <button
                        onClick={prevMonth}
                        className="p-2 rounded-lg border hover:bg-gray-100"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <h2 className="text-xl font-semibold">
                        {month} {year}
                    </h2>

                    <button
                        onClick={nextMonth}
                        className="p-2 rounded-lg border hover:bg-gray-100"
                    >
                        <ChevronRight size={20} />
                    </button>

                </div>

            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-2 mb-2">

                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="text-center font-semibold text-gray-600"
                    >
                        {day}
                    </div>
                ))}

            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">

                {Array.from({ length: 42 }).map((_, index) => {

                    const day = index - firstDay + 1;

                    const isCurrentMonth =
                        day > 0 && day <= daysInMonth;

                    const today = new Date();

                    const isToday =
                        isCurrentMonth &&
                        day === today.getDate() &&
                        currentDate.getMonth() === today.getMonth() &&
                        currentDate.getFullYear() === today.getFullYear();

                    const currentDateString = `${currentDate.getFullYear()}-${String(
                        currentDate.getMonth() + 1
                    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const dayHistory = history
                        .filter((item) => {
                            const historyDate = new Date(item.date);

                            const formattedDate = `${historyDate.getFullYear()}-${String(
                                historyDate.getMonth() + 1
                            ).padStart(2, "0")}-${String(historyDate.getDate()).padStart(2, "0")}`;

                            return formattedDate === currentDateString;
                        })
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                    const latestRecord = dayHistory[0];
                    if (currentDateString === "2026-07-19") {
                        console.log("Latest Record:", latestRecord);
                        console.log("Completed:", latestRecord?.completed);
                    }

                    const isCompleted = latestRecord?.completed === true;
                    const isMissed = latestRecord?.completed === false;

                    const handleDateClick = () => {
                        if (!isCurrentMonth) return;

                        const habits = history.filter((item) => {
                            const historyDate = new Date(item.date);

                            const formattedDate = `${historyDate.getFullYear()}-${String(
                                historyDate.getMonth() + 1
                            ).padStart(2, "0")}-${String(historyDate.getDate()).padStart(2, "0")}`;

                            return formattedDate === currentDateString;
                        });

                        setSelectedDate(currentDateString);
                        setSelectedHabits(habits);
                    };
                    const cellColor = isToday
                        ? "BLUE"
                        : isMissed
                            ? "RED"
                            : isCompleted
                                ? "GREEN"
                                : "NONE";

                    if (currentDateString === "2026-07-19") {
                        console.log("Cell Color:", cellColor);
                    }
                    return (
                        <div  
                        
                            onClick={handleDateClick}
                            key={index}
                            className={`h-24 rounded-lg border transition flex items-start justify-end p-2 ${isToday
                                    ? "bg-blue-600 border-blue-700 text-white ring-2 ring-blue-300"
                                    : isMissed
                                        ? "bg-red-100 border-red-500"
                                        : isCompleted
                                            ? "bg-green-100 border-green-500"
                                            : isCurrentMonth
                                                ? "bg-white hover:bg-gray-50"
                                                : "bg-gray-100"
                                }`}
                        >
                            <span
                                className={`text-sm font-semibold ${isToday ? "text-white" : "text-gray-600"
                                    }`}
                            >
                                {isCurrentMonth ? day : ""}
                            </span>
                        </div>
                    );
                })}
            </div>

            {selectedDate && (
                <div className="mt-8 rounded-lg border p-4 bg-white shadow">

                    <h2 className="text-xl font-bold mb-4">
                        {selectedDate}
                    </h2>

                    {selectedHabits.length === 0 ? (
                        <p className="text-gray-500">
                            No completed habits.
                        </p>
                    ) : (
                        <ul className="space-y-2">
                            {selectedHabits.map((item) => (
                                <li key={item._id}>
                                    ✅ {item.habit?.title || "Unknown Habit"}
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            )}

        </div>
    );
}

export default Calendar;