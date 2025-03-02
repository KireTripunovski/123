// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { AuthUser, User } from "../types/userTypes";

interface AuthContextType {
  currentUser: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:3002/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      const users: User[] = Array.isArray(data) ? data : data.users;

      const user = users.find(
        (u) => u.email === email && u.password_hash === `hash${password}`
      );

      if (user) {
        const authUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          profile_picture: user.profile_picture,
        };
        setCurrentUser(authUser);
        localStorage.setItem("user", JSON.stringify(authUser));
        return true;
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const value: AuthContextType = {
    currentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
