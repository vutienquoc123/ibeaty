/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../text';
import {Rating} from 'react-native-ratings';
import {formatMoneyToString} from '../../utils';

export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={{uri: props.source}} />
        <View style={styles.textContainer}>
          <Text>{props.name}</Text>
          <Text>{props.date}</Text>
          <Text>{formatMoneyToString(props.price)}</Text>
          <Text
            style={{color: props.status === 'Đã đặt lịch' ? 'green' : 'black'}}>
            {props.status}
          </Text>
        </View>
      </View>
      <View style={styles.rateContainer}>
        <Text style={{marginRight: 10, color: '#FF7800'}}>{props.rate}/5</Text>
        <Rating
          type="custom"
          startingValue={props.rate}
          readonly={true}
          ratingCount={1}
          imageSize={20}
          ratingColor="#ff7800"
          ratingTextColor="#FF7800"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    alignSelf: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
  },
  price: {
    color: 'grey',
  },
});
