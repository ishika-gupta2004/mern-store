import { useState } from "react"
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post("/auth/signup", {
                name,
                email,
                password
            })
            alert(res.data.message)
            navigate("/login")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-md w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                    <form onSubmit={handleSubmit} className="space y-4">
                        <input type="text" placeholder="name" className="w-full border p-2 rounded" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input type="text" placeholder="email" className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="text" placeholder="password" className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}