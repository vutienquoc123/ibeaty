import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/text/index';

import Button from './Button';
import UserInput from './UserInput';

import ic_user from '../img/user.png';
import ic_pass from '../img/pass.png';

const FormRegister = (props) => {
  const BackToLogin = () => {
    props.onback();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.underline} />
      <UserInput img={ic_user} placeholder="User..." secure={false} />
      <UserInput img={ic_pass} placeholder="Pass..." secure={true} />
      <UserInput img={ic_pass} placeholder="Pass confirmation" secure={true} />
      <View style={{marginBottom: 20}} />
      <Button name="REGISTER" color="#f47d6b" />
      <TouchableOpacity style={styles.back} onPress={BackToLogin}>
        <Text style={styles.text}>Back To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormRegister;

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
  back: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
