/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../text';
export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.image}>
          <Image style={{width: 28, height: 28}} source={{uri: props.src}} />
        </View>
        <View style={{marginƯLeft: 8}}>
          <Text>{props.service}</Text>
          <Text>{props.stylist}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    padding: 8,
    borderRadius: 24,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginRight: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 6,
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',

    width: '100%',
  },
});
