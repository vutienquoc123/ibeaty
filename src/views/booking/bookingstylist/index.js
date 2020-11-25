/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BookingDropdown from '../../../components/bookingDropdown';
import BottomButton from '../../../components/bottomButton';
export default function index(props) {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <BookingDropdown
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            title="Dịch vụ 1"
          />
          <BookingDropdown
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            title="Dịch vụ 2"
          />
          <BookingDropdown
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            title="Dịch vụ 3"
          />
        </View>
      </ScrollView>
      <BottomButton
        onPress={() => props.navigation.navigate('BookingDateView')}
        title="TIẾP THEO"
      />
    </View>
  );
}
