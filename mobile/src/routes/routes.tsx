import React, { useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen'
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log(loading)
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  return user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
