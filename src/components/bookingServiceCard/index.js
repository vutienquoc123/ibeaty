import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../../components/text';
import RadioButton from '../radioButton';
export default function BookingServiceCard(props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.image}>
          <Image style={{width: 28, height: 28}} source={{uri: props.src}} />
        </View>
        <Text>{props.title}</Text>
      </View>
      <RadioButton
        isSelected={isSelected}
        setIsSelected={(boolean) => {
          setIsSelected(boolean);
        }}
      />
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
});
