import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import logo from '../img/logo.jpg';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});
