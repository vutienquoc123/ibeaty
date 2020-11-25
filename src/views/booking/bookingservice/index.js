import React from 'react';
import {ScrollView} from 'react-native';
import BookingServiceCard from '../../../components/bookingServiceCard';
import BottomButton from '../../../components/bottomButton';
export default function BookingService(props) {
  return (
    <ScrollView>
      <BookingServiceCard
        src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
        title="Dịch vụ 1"
      />
      <BookingServiceCard
        src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
        title="Dịch vụ 1"
      />
      <BookingServiceCard
        src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
        title="Dịch vụ 1"
      />
      <BookingServiceCard
        src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
        title="Dịch vụ 1"
      />

      <BottomButton
        title="TIẾP THEO"
        onPress={() => props.navigation.navigate('BookingStylistView')}
      />
    </ScrollView>
  );
}
