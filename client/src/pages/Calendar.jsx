
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendar } from "../services/calendar.service";
import { useEffect, useState } from "react";

function Calendar() {

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [currentDate, setCurrentDate] = useState(new Date());
    const [history, setHistory] = useState([]);
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

                    const isCompleted = history.some((item) => {
                        const historyDate = new Date(item.date);

                        const formattedDate = `${historyDate.getFullYear()}-${String(
                            historyDate.getMonth() + 1
                        ).padStart(2, "0")}-${String(historyDate.getDate()).padStart(2, "0")}`;

                        return formattedDate === currentDateString;
                    });

                    return (
                        <div
                            key={index}
                            className={`h-24 rounded-lg border transition flex items-start justify-end p-2 ${isToday
                                    ? "bg-blue-600 border-blue-700 text-white ring-2 ring-blue-300"
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

        </div>
    );
}

export default Calendar;