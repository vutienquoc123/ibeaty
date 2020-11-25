import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/text/index';

import UserInput from './UserInput';

import ic_user from '../img/user.png';
import ic_pass from '../img/pass.png';

const FormInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.underline} />
      <UserInput img={ic_user} placeholder="User..." secure={false} />
      <UserInput img={ic_pass} placeholder="Pass..." secure={true} />
      <View style={styles.link}>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  underline: {
    width: 40,
    borderBottomColor: '#f27868',
    borderBottomWidth: 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
  },
  link: {
    marginTop: 20,
  },
  text: {
    textAlign: 'right',
  },
});
