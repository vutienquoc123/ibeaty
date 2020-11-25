/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal, StyleSheet, Button} from 'react-native';
import Text from '../text';

import {ScrollView} from 'react-native-gesture-handler';
import {windowHeight, windowWidth} from '../../const/dimension';

export default function Index(props) {
  const [selectedTime, setSelectedTime] = useState();
  const row = (time, status) => (
    <View
      style={[
        {backgroundColor: selectedTime === time ? '#eee' : 'white'},
        styles.row,
      ]}
      onStartShouldSetResponder={() => {
        setSelectedTime(time);
      }}>
      <Text>{time}</Text>
      <Text>{status}</Text>
    </View>
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.background} />
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Đặt chỗ</Text>
          <ScrollView style={{height: 400}}>
            {row('7:30', 'Đã hẹn')}
            {row('8:30', 'Đã hẹn')}
            {row('9:30', 'Đã hẹn')}
            {row('10:30', 'Đã hẹn')}
            {row('11:30', 'Đã hẹn')}
            {row('12:30', 'Đã hẹn')}
            {row('13:30', 'Đã hẹn')}
            {row('14:30', 'Đã hẹn')}
            {row('15:30', 'Đã hẹn')}
            {row('16:30', 'Đã hẹn')}
            {row('17:30', 'Đã hẹn')}
            {row('18:30', 'Đã hẹn')}
          </ScrollView>
          <View style={styles.row}>
            <Text
              onPress={props.closeModal}
              style={[styles.button, {backgroundColor: '#aaa'}]}>
              Hủy
            </Text>
            <Text
              onPress={props.closeModal}
              style={[styles.button, {backgroundColor: 'salmon'}]}>
              Đồng ý
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: windowWidth,
    height: windowHeight,
  },
  background: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'grey',
    opacity: 0.5,
    position: 'absolute',
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 400,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: (windowWidth - 140) / 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    width: windowWidth - 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
});
