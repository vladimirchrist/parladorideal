import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Post as PostScreen } from "../pages";
import { Post } from "../models";

const AppStack = createStackNavigator();

const AppRoutes: React.FC  = () => (
    <AppStack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName='Home'>
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Post' component={PostScreen} />

    </AppStack.Navigator>
)

export type AppStackParamList = {
    Home: undefined;
    Post: { post: Post } | undefined;
}

export default AppRoutes;
