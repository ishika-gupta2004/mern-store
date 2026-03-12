import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

    const token = localStorage.getItem("token")
    // console.log("Token:", token)
    if (!token) {
        return <Navigate to="/login" />
    }

    if (token) {
        Navigate("/dashboard")
    }

    return children
}

export default ProtectedRoute