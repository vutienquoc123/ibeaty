import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import Text from '../../../components/text/index';

const InputText = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={props.img} style={styles.icon} />
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <TextInput style={styles.inputText} placeholder={props.placeholder} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  head: {
    flexDirection: 'row',
  },
  icon: {
    height: 28,
    width: 28,
    margin: 5,
  },
  title: {
    fontWeight: '200',
    marginTop: 10,
  },
  inputText: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'gray',
    height: 40,
    // marginHorizontal: 10,
    borderRadius: 5,
    paddingLeft: 20,
  },
});
