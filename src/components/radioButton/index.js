/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export default function RadioButton(props) {
  return (
    <View
      onStartShouldSetResponder={() => {
        props.setIsSelected(!props.isSelected);
      }}
      style={{
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {props.isSelected ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: 'salmon',
          }}
        />
      ) : null}
    </View>
  );
}
