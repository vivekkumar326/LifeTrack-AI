import { Bell, Search } from "lucide-react";

function Navbar() {
    return (
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                Welcome Back 👋
            </h1>

            <div className="flex items-center gap-5">

                <div className="flex items-center border rounded-lg px-3 py-2">
                    <Search size={18} />
                    <input
                        placeholder="Search..."
                        className="outline-none ml-2"
                    />
                </div>

                <Bell size={24} />

                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    V
                </div>

            </div>

        </header>
    );
}

export default Navbar;