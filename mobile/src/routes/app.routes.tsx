import React from 'react';
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import registerActiveImg from '../assets/cadastrar-active.png';
import registerImg from '../assets/cadastrar.png';
import listActiveImg from '../assets/listagem-active.png';
import listImg from '../assets/listagem.png';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

const App = createBottomTabNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let imgIcon;

        if (route.name === 'Dashboard') {
          imgIcon = focused ? listActiveImg : listImg;
        } else if (route.name === 'Register') {
          imgIcon = focused ? registerActiveImg : registerImg;
        }

        return <Image source={imgIcon} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#363F5F',
      inactiveTintColor: '#868C9F',
      style: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
      },
    }}>
    <App.Screen
      name="Dashboard"
      options={{ title: 'Listagem' }}
      component={Dashboard}
    />
    <App.Screen
      name="Register"
      options={{ title: 'Cadastrar' }}
      component={Register}
    />
  </App.Navigator>
);

export default Routes;
