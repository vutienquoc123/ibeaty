import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../components/text/index';

import Icon from './IconSocial';

import ic_fb from '../img/fn.png';
import ic_ins from '../img/ins.jpg';

const FormSocial = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Or Login With</Text>
      <View style={styles.listIcon}>
        <Icon img={ic_fb} />
        <Icon img={ic_ins} />
      </View>
    </View>
  );
};

export default FormSocial;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {},
  listIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
