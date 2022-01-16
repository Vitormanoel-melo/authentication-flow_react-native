import React from 'react'
import Dashboard from '../pages/Dashboard'

import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator(); 

// Define as rotas que o usuário poderá acessar quando estiver logado

export const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
)

export default AppRoutes