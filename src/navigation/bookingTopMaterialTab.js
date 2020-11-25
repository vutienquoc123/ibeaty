import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BookedView from '../views/booking/booked';
import BookingHistoryView from '../views/booking/bookingHistory';
const Tab = createMaterialTopTabNavigator();

export default function BookingTopMaterialTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12},
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'red',
        style: {
          margin: 10,
          borderRadius: 24,
        },
        indicatorStyle: {
          height: '100%',
          backgroundColor: 'salmon',
          borderRadius: 24,
        },
      }}>
      <Tab.Screen name="Booked" component={BookedView} />
      <Tab.Screen name="History" component={BookingHistoryView} />
    </Tab.Navigator>
  );
}
