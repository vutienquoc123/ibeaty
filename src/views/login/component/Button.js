import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/text/index';
const Button = (props) => {
  const handleClick = () => {
    console.log('press');
    props.onpress();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.color}]}
        onPress={handleClick}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
  },
  button: {
    width: Width - 60,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
