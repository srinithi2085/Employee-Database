import { useState, type ReactNode } from 'react';
import type { User } from '../types';
import { AuthContext } from './auth.context';

const HARDCODED_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    if (
      username === HARDCODED_CREDENTIALS.username &&
      password === HARDCODED_CREDENTIALS.password
    ) {
      setUser({
        username,
        password: '',
        isAuthenticated: true,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: user?.isAuthenticated ?? false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
