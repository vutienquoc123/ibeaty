/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import Text from '../text';
import Icon from 'react-native-vector-icons/FontAwesome';
import BookingStylistCard from '../bookingStylistCard';
export default function BookingDropdown(props) {
  const [isActive, setIsActive] = useState(false);
  const spinValue = new Animated.Value(0);
  const dropValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['0deg', '90deg'],
  });

  const drop = dropValue.interpolate({
    inputRange: [-1, 1],
    outputRange: [0, 350],
  });
  // First set up animation
  //   const handleOnPress = () => {
  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: isActive ? 1 : -1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(dropValue, {
      toValue: isActive ? 1 : -1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  });

  return (
    <View style={styles.allContainer}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.image}>
            <Image style={{width: 28, height: 28}} source={{uri: props.src}} />
          </View>
          <Text>{props.title}</Text>
        </View>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Icon
            onPress={() => {
              setIsActive(!isActive);
            }}
            name="angle-right"
            color={isActive ? 'salmon' : 'black'}
            size={28}
          />
        </Animated.View>
      </View>
      <View style={{flex: 1, zIndex: 3}}>
        <Animated.ScrollView style={{height: drop, flex: 1, zIndex: 3}}>
          <BookingStylistCard
            source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
            name="Nguyen Van A"
            price={1500000}
            rate={4}
          />
          <BookingStylistCard
            source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
            name="Nguyen Van A"
            price={1500000}
            rate={4}
          />
          <BookingStylistCard
            source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
            name="Nguyen Van A"
            price={1500000}
            rate={4}
          />
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
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
    // paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
});
