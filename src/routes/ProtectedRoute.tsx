import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { currentUser, loading } = useAuth()

    if (loading) return null

    if (!currentUser) {
        return <Navigate to="/sign-in" />
    }

    return <>{children}</>
}