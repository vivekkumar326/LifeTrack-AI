import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/auth.service";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await loginUser(formData);

            localStorage.setItem("token", response.token);

            alert("Login Successful");

            navigate("/dashboard");
        } catch (error) {
            alert(
                error.response?.data?.message || "Login Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex justify-center items-center">
            <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">

                <h1 className="text-3xl text-center font-bold text-white mb-6">
                    LifeTrack AI
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded mb-4"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 rounded mb-6"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 w-full text-white p-3 rounded"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="text-center text-white mt-5">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-400"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;