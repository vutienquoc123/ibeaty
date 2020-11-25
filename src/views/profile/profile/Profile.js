/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FormInput from '../component/FormInput';
import Head from '../component/Head';
const Profile = (props) => {
  const OnChangePass = ()=>{
    props.navigation.navigate('ChangePassView');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Head/>
        <FormInput changepass={OnChangePass} />
      </View>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {},
});
