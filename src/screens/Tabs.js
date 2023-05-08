/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';

const Tab = createMaterialBottomTabNavigator();
function SettingsScreen() {
  return (
    <View style={style.container}>
      <Text>dgg</Text>
    </View>
  );
}

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
          tabBarIcon: () => <Entypo name="home" color={'#000'} size={26} />,
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
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: () => (
            <FontAwesome5 name="hands-helping" color={'#000'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
