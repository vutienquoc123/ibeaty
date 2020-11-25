import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FormRegister from '../component/FormRegister';
import Logo from '../component/Logo';

const Register = (props) => {
  const onBack = () => {
    props.navigation.navigate('LoginView');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <FormRegister onback={onBack} />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
