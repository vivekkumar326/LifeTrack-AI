import Card from "../ui/Card";

function AnalyticsCard({ title, value, color = "text-slate-800" }) {
    return (
        <Card>

            <h3 className="text-gray-500">
                {title}
            </h3>

            <p className={`text-4xl font-bold mt-3 ${color}`}>
                {value}
            </p>

        </Card>
    );
}

export default AnalyticsCard;