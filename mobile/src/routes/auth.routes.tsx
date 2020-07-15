import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Register } from '../pages';

const StackAuth = createStackNavigator()

const AuthRoutes: React.FC  = () => (
    <StackAuth.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <StackAuth.Screen name="Login" component={Login} />
        <StackAuth.Screen name="Register" component={Register} />

    </StackAuth.Navigator>
)

export default AuthRoutes;