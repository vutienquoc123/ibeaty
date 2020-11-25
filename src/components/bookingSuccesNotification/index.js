/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const index = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Bạn đã đặt giờ hẹn
        </Text>
        <Text style={{color: 'grey'}}>
          Vui lòng chờ thông báo của chúng tôi
        </Text>
      </View>
      <View>
        <Text style={{color: 'salmon', fontSize: 32, fontWeight: 'bold'}}>
          {props.time}
        </Text>
      </View>
      <Icon name="delete" size={24} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  textContainer: {
    width: 150,
  },
});
