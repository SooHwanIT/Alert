import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Component
import Alert from './Src/Components/Alert';
import Chat from './Src/Components/Chat';
import CreateAlert from './Src/Components/Alert';
import Home from './Src/Components/Home';
import Login from './Src/Components/Login';
import User from './Src/Components/User';


const HomeStack = createStackNavigator();
const HomeStackNavi = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Chat" component={Chat}/>
    </HomeStack.Navigator>
  );
};

const UserStack = createStackNavigator();
const UserStackNavi = () => {
  return (
    <UserStack.Navigator >
      <UserStack.Screen name="User" component={User}/>
      <UserStack.Screen name="Login" component={Login}/>
    </UserStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavi = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="CreateAlert"
          component={CreateAlert}
          options={{
            tabBarLabel: 'CreateAlert',
          }}
        />
        <Tab.Screen
          name="HomeStackNavi"
          component={HomeStackNavi}
          options={{
            tabBarLabel: 'HomeStackNavi',
          }}
        />
        <Tab.Screen
          name="UserStackNavi"
          component={UserStackNavi}
          options={{
            tabBarLabel: 'UserStackNavi',
          }}
        />
      </Tab.Navigator>
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <TabNavi/>
    </NavigationContainer>
  );
};