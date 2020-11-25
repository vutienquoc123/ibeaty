import React, {useEffect} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ArrowDrop = (props) => {
  const spinValue = new Animated.Value(0);
  const dropValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['0deg', '90deg'],
  });

  // const drop = dropValue.interpolate({
  //   inputRange: [-1, 1],
  //   outputRange: [0, 350],
  // });
  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: props.isActive ? 1 : -1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(dropValue, {
      toValue: props.isActive ? 1 : -1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  });
  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <Icon
        style={styles.arrowdrop}
        onPress={() => {
          props.setIsActive(!props.isActive);
        }}
        name="angle-right"
        color={props.isActive ? 'salmon' : 'gray'}
        size={28}
      />
    </Animated.View>
  );
};

export default ArrowDrop;
const styles = StyleSheet.create({});
