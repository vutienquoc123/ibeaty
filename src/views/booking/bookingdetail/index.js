/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../../../components/text';
import {ScrollView} from 'react-native-gesture-handler';
import BookingCard from '../../../components/bookingCard';
import {
  windowWidth as WIDTH,
  windowHeight as HEIGHT,
} from '../../../const/dimension';
import BottomButton from '../../../components/bottomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function index(props) {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View style={styles.headerContainer}>
          <Icon
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{position: 'absolute', top: 160, left: 220}}
            name="chevron-left"
            size={32}
            color="white"
          />
          <Image
            style={styles.avatar}
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
          />
          <View>
            <Text
              style={[styles.headerText, {fontSize: 18, fontWeight: 'bold'}]}>
              Name salon
            </Text>
            <Text style={styles.headerText}>
              <Ionicons name="location-outline" size={16} color="grey" />
              Số 11 đường Xuân Thủy, Cầu Giấy, Hà Nội
            </Text>
            <Text style={styles.headerText}>
              <Ionicons name="mail-outline" size={16} color="grey" />{' '}
              demo@info.com.vn
            </Text>
            <Text style={styles.headerText}>
              <Icon name="web" size={16} color="grey" /> www.hairsalon.vn
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Thanh toán</Text>
          <Text style={styles.titleText}>540.000đ</Text>
        </View>
        <View style={styles.cardContainer}>
          <BookingCard
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            service="Dich vu 1"
            stylist="Nguyen Van A"
          />
          <BookingCard
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            service="Dich vu 1"
            stylist="Nguyen Van A"
          />
          <BookingCard
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            service="Dich vu 1"
            stylist="Nguyen Van A"
          />
          <BookingCard
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            service="Dich vu 1"
            stylist="Nguyen Van A"
          />
          <BookingCard
            src="https://vppnhatnam.110.vn/files/icon/1871/keo_bAqF9IpR.png"
            service="Dich vu 1"
            stylist="Nguyen Van A"
          />
        </View>
      </View>
      <Image
        style={{
          width: WIDTH / 2.7,
          height: WIDTH / 2.7,
          alignSelf: 'center',
        }}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
        }}
      />
      <BottomButton
        onPress={() => props.navigation.navigate('BookingView')}
        title="Đồng ý"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'salmon',
    marginTop: -140,
    borderBottomLeftRadius: WIDTH * 10,
    borderBottomRightRadius: WIDTH * 10,
    height: HEIGHT * 0.6,
    width: WIDTH * 2,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 18,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 2,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
  },
  bodyContainer: {
    backgroundColor: 'white',
    margin: 20,
    marginTop: -80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  cardContainer: {
    padding: 18,
    paddingTop: 0,
  },
});
