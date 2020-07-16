import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";

import api from "../services/api";
import { User } from "../models";
import AsyncStorage from '@react-native-community/async-storage';
interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem("@Parlador:user");

      if (user) {
        const u: User = JSON.parse(user)
        verifyUser(u);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const verifyUser = async(user: User) => {
    const response = await api.get<User>(`/users/${user.id}`);
    if(response.data.id){
      setData({ user: response.data });
    }
  }

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<User>("/auth", { email, password });
    const user = response.data;
    await AsyncStorage.setItem("@Parlador:user", JSON.stringify(user));
    setData({ user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
