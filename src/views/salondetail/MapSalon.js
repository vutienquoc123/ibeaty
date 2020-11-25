import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapSalon = () => {
  return (
    <View>
      <View>
        <MapView
          style={styles.viewMap}
          provider={PROVIDER_GOOGLE}
          scrollEnabled={false}
          initialRegion={{
            latitude: 22.62938671242907,
            longitude: 88.4354486029795,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
          }}>
          <Marker coordinate={{latitude: 22.6293867, longitude: 88.4354486}} />
        </MapView>
      </View>
      <View style={styles.timeSalon}>
        <Text style={styles.titleTime}>Giờ mở cửa</Text>
        <View style={styles.timeOpen}>
          <Text>Thứ Hai</Text>
          <Text>7:00 - 22:00</Text>
        </View>
        <View style={styles.line_divide} />
        <View style={styles.timeOpen}>
          <Text>Thứ Ba</Text>
          <Text>7:00 - 22:00</Text>
        </View>
        <View style={styles.line_divide} />
        <View style={styles.timeOpen}>
          <Text>Thứ Tư</Text>
          <Text>7:00 - 22:00</Text>
        </View>
        <View style={styles.line_divide} />
        <View style={styles.timeOpen}>
          <Text>Thứ Năm</Text>
          <Text>7:00 - 22:00</Text>
        </View>
        <View style={styles.line_divide} />
        <View style={styles.timeOpen}>
          <Text>Thứ Sáu</Text>
          <Text>7:00 - 22:00</Text>
        </View>
        <View style={styles.line_divide} />
        <View style={styles.timeOpen}>
          <Text>Thứ Bảy</Text>
          <Text>7:30 - 21:00</Text>
        </View>
        <View style={styles.line_divide} />
        <View style={styles.timeOpen}>
          <Text>Chủ Nhật</Text>
          <Text>7:30 - 21:00</Text>
        </View>
      </View>
      <View style={styles.basicService}>
        <Text style={styles.titleTime}>Chúng tôi có</Text>
        <View style={styles.rowService}>
          <View style={styles.itemService}>
            <View style={styles.outlineIcon}>
              <Ionicons
                name="wifi"
                size={28}
                color="#999999"
                style={styles.PositionCenter}
              />
            </View>
            <Text style={styles.textItem}>Wifi miễn phí</Text>
          </View>
          <View style={styles.outlineIcon}>
            <Image
              source={require('../../assets/Image/car-park.png')}
              style={styles.PositionCenter}
            />
          </View>
          <Text style={styles.textItem}>Bãi đỗ ô tô</Text>
        </View>
        <View style={styles.rowService}>
          <View style={styles.itemService}>
            <View style={styles.outlineIcon}>
              <Image
                source={require('../../assets/Image/air-condition.png')}
                style={styles.PositionCenter}
              />
            </View>
            <Text style={styles.textItem}>Điều hòa</Text>
          </View>
          <View style={styles.itemService}>
            <View style={styles.outlineIcon}>
              <Ionicons
                name="cafe"
                size={28}
                color="#999999"
                style={styles.PositionCenter}
              />
            </View>
            <Text style={styles.textItem}>Cafe</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnShowmap}>
        <Text style={styles.textShowmap}>CHỈ ĐƯỜNG</Text>
      </View>
      <LinearGradient colors={['#fd9b7b', '#ef6f64']} style={styles.btnBook}>
        <Text style={styles.textBook}>ĐẶT LỊCH HẸN</Text>
      </LinearGradient>
    </View>
  );
};

export default MapSalon;

const styles = StyleSheet.create({
  viewMap: {
    height: 200,
    width: '100%',
    alignItems: 'center',
  },
  timeSalon: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  titleTime: {
    fontSize: 22,
    fontWeight: '600',
  },
  timeOpen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  line_divide: {
    height: 0.5,
    backgroundColor: '#cdcdcd',
  },
  basicService: {
    marginLeft: 20,
    marginBottom: 15,
  },
  rowService: {
    flexDirection: 'row',
    marginTop: 15,
  },
  outlineIcon: {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderColor: '#999999',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  PositionCenter: {
    marginVertical: '20%',
  },
  itemService: {
    marginRight: 35,
    flexDirection: 'row',
    width: '40%',
  },
  textItem: {
    color: '#999999',
    fontSize: 16,
    marginLeft: 10,
    alignSelf: 'center',
    fontWeight: '500',
  },
  btnShowmap: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#f18077',
    alignSelf: 'center',
    borderRadius: 100,
    marginVertical: 15,
  },
  textShowmap: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ef6f64',
    alignSelf: 'center',
    paddingVertical: 12,
  },
  btnBook: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 100,
    marginVertical: 5,
  },
  textBook: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
