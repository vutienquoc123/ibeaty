import {Picker} from '@react-native-community/picker';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../../components/text/index';

import sex from '../img/sex.png';

const Sex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={sex} style={styles.icon} />
        <Text style={styles.title}>Giới tính: </Text>
      </View>
      <Picker style={styles.picker}>
        <Picker.Item label="Nam" value="nam" />
        <Picker.Item label="Nữ" value="nữ" />
      </Picker>
    </View>
  );
};

export default Sex;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
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
    height: 40,
    width: '100%',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    paddingLeft: 20,
    marginHorizontal: 10,
  },
});
