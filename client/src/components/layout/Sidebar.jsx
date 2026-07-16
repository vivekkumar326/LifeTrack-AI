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

import { NavLink } from "react-router-dom";

const menus = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        name: "Habits",
        icon: ListChecks,
        path: "/habits",
    },
    {
        name: "Calendar",
        icon: CalendarDays,
        path: "/calendar",
    },
    {
        name: "Analytics",
        icon: BarChart3,
        path: "/analytics",
    },
    {
        name: "AI Coach",
        icon: Bot,
        path: "/ai",
    },
    {
        name: "Profile",
        icon: User,
        path: "/profile",
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/settings",
    },
];

function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

            <div className="text-3xl font-bold p-6 border-b border-slate-700">
                LifeTrack AI
            </div>

            <nav className="flex-1 mt-6">

                {menus.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-6 py-4 transition ${isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={22} />
                            {item.name}
                        </NavLink>
                    );
                })}

            </nav>

            <button className="flex items-center gap-3 p-6 hover:bg-red-600 transition">
                <LogOut size={22} />
                Logout
            </button>

        </aside>
    );
}

export default Sidebar;