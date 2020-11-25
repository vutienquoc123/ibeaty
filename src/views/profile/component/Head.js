import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import logo from '../img/logo.jpg';

const Head = () => {
  return (
    <View style={styles.container}>
      <View style={{height: 85, width: '100%', backgroundColor: '#f47d6b'}} />
      <View style={{height: 85, width: '100%', backgroundColor: '#ffffff'}} />
      <Image source={logo} style={styles.image} />
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    zIndex: 1,
    position: 'absolute',
    top: 10,
  },
});
