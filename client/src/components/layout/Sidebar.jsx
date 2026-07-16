import {
    LayoutDashboard,
    ListChecks,
    CalendarDays,
    BarChart3,
    Bot,
    User,
    Settings,
    LogOut,
} from "lucide-react";


import { NavLink, useNavigate } from "react-router-dom";

const menus = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Habits", icon: ListChecks, path: "/habits" },
    { name: "Calendar", icon: CalendarDays, path: "/calendar" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "AI Coach", icon: Bot, path: "/ai" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        
        <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-2xl">

            {/* Logo */}
            <div className="p-8 border-b border-slate-700">

                <h1 className="text-3xl font-extrabold text-blue-400">
                    LifeTrack AI
                </h1>

                <p className="text-slate-400 mt-2 text-sm">
                    AI Powered Productivity
                </p>

            </div>

            {/* Menu */}
            <nav className="flex-1 py-6">

                {menus.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `mx-3 mb-2 flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${isActive
                                    ? "bg-blue-600 shadow-lg"
                                    : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={22} />

                            <span className="font-medium">
                                {item.name}
                            </span>

                        </NavLink>
                    );
                })}

            </nav>

            {/* User */}
            <div className="border-t border-slate-700 p-6">

                <div className="flex items-center gap-4">

                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                        V
                    </div>

                    <div>

                        <h3 className="font-semibold">
                            Vivek Kumar
                        </h3>

                        <p className="text-slate-400 text-sm">
                            MCA Student
                        </p>

                    </div>

                </div>

                <button
                    onClick={handleLogout}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-medium transition hover:bg-red-700"
                >
                    <LogOut size={20} />
                    Logout
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;