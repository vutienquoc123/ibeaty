import {Picker} from '@react-native-community/picker';
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Text from '../../../components/text/index';

import birthday from '../img/birthday.png';

const Date = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={birthday} style={styles.icon} />
        <Text style={styles.title}>Ngày sinh: </Text>
      </View>

      <DatePicker
        style={styles.picker}
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
          },
        }}
      />
    </View>
  );
};

export default Date;

const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {},
  head: {
    flexDirection: 'row',
    marginEnd: 3,
  },
  icon: {
    height: 28,
    width: 28,
    margin: 5,
  },
  title: {
    fontWeight: '200',
    marginTop: 10,
  },
  picker: {
    marginTop: 5,
    height: 40,
    width: '100%',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    // marginHorizontal: 10,
  },
});
