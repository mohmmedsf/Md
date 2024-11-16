import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'customer' | 'courier' | 'company';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored auth token and validate
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token and set user
      setIsAuthenticated(true);
      // Mock user data
      setUser({
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        type: 'customer',
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser = {
      id: '1',
      name: 'Test User',
      email,
      type: 'customer' as const,
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', 'mock-token');
  };

  const register = async (data: any) => {
    // Mock registration - replace with actual API call
    const mockUser = {
      id: '1',
      name: data.name,
      email: data.email,
      type: data.type,
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', 'mock-token');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}