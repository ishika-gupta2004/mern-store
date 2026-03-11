import { useState } from "react"
import API from "../api/api"
import { Link } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            })

            localStorage.setItem("token", res.data.token)

            alert("Login Successful")

        } catch (err) {
            console.log(err)
        }

    }

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-md w-96">

                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                        Login
                    </button>

                </form>
                <p>Don't have an account?<Link to="/signup" className="text-blue-500"> Signup</Link></p>
            </div>

        </div>

    )

}

export default Login