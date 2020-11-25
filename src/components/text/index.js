import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function TextCustomized(props) {
  return (
    <Text onPress={props.onPress} style={[props.style, styles.text]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: '',
  },
});
