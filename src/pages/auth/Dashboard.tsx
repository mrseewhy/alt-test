import { useAuth } from '../../context/AuthContext'


const Dashboard = () => {
    const { currentUser } = useAuth()
    return (
        <div>
            <p>FullNames: {currentUser?.displayName}</p>
            <p>Email: {currentUser?.email}</p>
        </div>
    )
}

export default Dashboard