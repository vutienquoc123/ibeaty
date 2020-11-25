import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../text';
import {windowWidth} from '../../const/dimension';
export default function index(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.button} onPress={props.onPress} title={props.title}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    alignItems: 'center',
  },
  button: {
    width: windowWidth * 0.9,
    textAlign: 'center',
    backgroundColor: 'salmon',
    paddingVertical: 14,
    borderRadius: 40,
    color: 'white',
    fontSize: 18,
    margin: 20,
  },
});
