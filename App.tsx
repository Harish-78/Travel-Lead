import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screens/welcome';
import Login from './src/auth/Login';
import Register from './src/auth/register';
import Tabs from './src/screens/Tabs';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Welcome">
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#2a9039',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#2a9039',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
