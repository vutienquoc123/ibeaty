import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {
  HomeStackScreen,
  MapStack,
  BookingStack,
  CommunityStack,
  MesStack,
} from './stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/home/screens/home';
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

function Schedule() {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: -35,
        borderWidth: 2,
        borderColor: '#f78972',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name="calendar" color="#f78972" size={26} />
    </View>
  );
}

const TabContent = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeBackgroundColor: '#febca6',
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      // pressColor: 'gray',
      style: {
        backgroundColor: '#f78972',
        color: 'white',
      },
      labelStyle: {
        color: 'white',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        // tabBarColor:'#f78972',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color="white" size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapStack}
      options={{
        tabBarLabel: 'Vị trí',
        // tabBarColor:'#f78972',
        tabBarIcon: ({color}) => (
          <Icons name="google-maps" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Moment"
      component={BookingStack}
      options={{
        tabBarLabel: 'đặt lịch',

        tabBarIcon: (props) => <Schedule {...props} />,
      }}
    />
    <Tab.Screen
      name="Community"
      component={CommunityStack}
      options={{
        tabBarLabel: 'Cộng đồng',
        // tabBarColor:'#f78972',

        tabBarIcon: ({color}) => <Icon name="people" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Mes"
      component={MesStack}
      options={{
        tabBarLabel: 'tin nhắn',
        // tabBarColor:'#f78972',
        tabBarIcon: ({color}) => (
          <Icons name="message-processing" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabContent;
