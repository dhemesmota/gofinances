import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F0F2F5' },
    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Import" component={Import} />
  </App.Navigator>
);

export default Routes;
