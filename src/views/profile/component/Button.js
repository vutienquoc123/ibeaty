import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/text/index';
const Button = (props) => {
  const handleClick = () => {
    props.onpress();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.color1}]}
        onPress={handleClick}>
        <Text style={[styles.text, {color: props.color2}]}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    width: Width - 40,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f47d6b',
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
  },
});
