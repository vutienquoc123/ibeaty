/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../component/Button';
import FormLogin from '../component/FormLogin';
import FormSocial from '../component/FormSocial';
import Logo from '../component/Logo';

const Login = (props) => {

  toRegister = ()=>{
    // navigation.navigate('RegisterView');
    props.navigation.navigate('RegisterView');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Logo />
      <FormLogin />
      <Button name="LOGIN" color="#f47d6b" />
      <Button name="REGISTER" color="#aaaaaa" onpress={ toRegister }  />
      <FormSocial />
    </View>
    </ScrollView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems:'center',
    justifyContent:'center',
  },
});
