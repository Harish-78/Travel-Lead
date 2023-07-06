/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ServicesScreen from './ServicesScreen';

const Tab= createMaterialBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#fff"
      barStyle={{backgroundColor: '#2a9039'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Entypo name="home" color={'#000'} size={20} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Where to go',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="map-search"
              color={'#000'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: () => (
            <FontAwesome5 name="hands-helping" color={'#000'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
