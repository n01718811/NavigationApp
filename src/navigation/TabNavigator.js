import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: '#3498db',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({color, size}) => {
        let iconName;
        if (route.name === 'HomeTab') iconName = 'home';
        else if (route.name === 'Search') iconName = 'search';
        else if (route.name === 'Settings') iconName = 'settings';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
    <Tab.Screen name="HomeTab" component={StackNavigator} options={{title: 'Home'}} />
    <Tab.Screen name="Search" component={SearchScreen} options={{title: 'Search'}} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{title: 'Settings'}} />
  </Tab.Navigator>
);

export default TabNavigator;
