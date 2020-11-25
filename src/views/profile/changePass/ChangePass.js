/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FormInput from '../../login/component/FormLogin';
import ChangePass from '../component/ChangePass';
import Head from '../component/Head';
// import Head from './child/Head';
const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Head/>
        <ChangePass/>
      </View>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {},
});
