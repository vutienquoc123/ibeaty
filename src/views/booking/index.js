import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTab from '../../navigation/bookingTopMaterialTab';
export default function index(props) {
  return (
    <NavigationContainer independent={true}>
      <TopTab />
    </NavigationContainer>
  );
}
