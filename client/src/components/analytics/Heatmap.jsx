import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Heatmap.css";

function Heatmap({ data }) {
    const values = data.map((item) => ({
        date: item.date,
        count: item.count,
    }));

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
            <h2 className="text-2xl font-bold mb-5">
                Habit Heatmap
            </h2>

            <CalendarHeatmap
                startDate={new Date(new Date().setDate(new Date().getDate() - 364))}
                endDate={new Date()}
                values={values}
                classForValue={(value) => {
                    if (!value || value.count === 0) {
                        return "color-empty";
                    }

                    if (value.count >= 4) {
                        return "color-github-4";
                    }

                    if (value.count >= 3) {
                        return "color-github-3";
                    }

                    if (value.count >= 2) {
                        return "color-github-2";
                    }

                    return "color-github-1";
                }}
                showWeekdayLabels
            />
        </div>
    );
}

export default Heatmap;