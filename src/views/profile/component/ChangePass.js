import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import Text from '../../../components/text/index';

import Button from './Button';
const ChangePass = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nhập mật khẩu cũ và mật khẩu mới tại đây</Text>
      <TextInput placeholder="Mật khẩu cũ" style={styles.textinput} />
      <TextInput placeholder="Mật khẩu mới" style={styles.textinput} />
      <TextInput placeholder="Nhập lại mật khẩu" style={styles.textinput} />
      <Button name="Thay đổi mật khẩu" color1="#f47d6b" color2="#ffffff" />
    </View>
  );
};

export default ChangePass;

const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    paddingHorizontal: 40,
    textAlign: 'center',
    fontSize: 18,
  },
  textinput: {
    color: 'gray',
    textAlign: 'center',
    height: 50,
    width: Width - 40,
    margin: 5,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#f47d6b',
  },
});
