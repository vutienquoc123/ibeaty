import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../text';
import {Rating} from 'react-native-ratings';
import RadioButton from '../radioButton';
import {formatMoneyToString} from '../../utils';
export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={{uri: props.source}} />
        <View>
          <Text>{props.name}</Text>
          <Text>{formatMoneyToString(props.price)}</Text>

          <Rating
            startingValue={props.rate}
            readonly={true}
            ratingCount={5}
            imageSize={20}
            ratingBackgroundColor="none"
          />
        </View>
      </View>
      <View>
        <RadioButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 6,
  },
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 20,
    alignItems: 'center',
    flex: 1,
    zIndex: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
  },
  price: {
    color: 'grey',
  },
});
