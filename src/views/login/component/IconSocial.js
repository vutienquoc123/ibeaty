import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const IconSocial = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.img} />
    </View>
  );
};

export default IconSocial;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
});
