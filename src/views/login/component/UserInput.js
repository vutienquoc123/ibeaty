import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const UserInput = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.img} resizeMode="contain" style={styles.img} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        secureTextEntry={props.secure}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#f27868',
    borderBottomWidth: 2,
    marginTop: 20,
  },
  img: {
    height: 28,
    width: 28,
    marginTop: 5,
  },
  input: {
    color: 'gray',
    marginLeft: 5,
    height: 40,
  },
});
