import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../lib/firebase";
import { signOut } from 'firebase/auth'

// 1. Define everything the context will expose
interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    signup: (email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
}

// 2. Create the context with a default value that matches the interface
const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    loading: true,
    signup: async () => { },
    login: async () => { },
    logout: async () => { },
});

// 3. The provider holds all the state and logic
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth)
    }
    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currentUser,
        loading,
        signup,
        logout,
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// 4. Custom hook to consume the context
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}