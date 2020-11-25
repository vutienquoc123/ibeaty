import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
import BookingTimeModal from '../../../components/bookingTimeModal';
import BottomButton from '../../../components/bottomButton';
import BookingSuccesNotification from '../../../components/bookingSuccesNotification';
export default function BookingDate(props) {
  const [modalVisible, setModalVisible] = useState(false);

  LocaleConfig.locales.vn = {
    monthNames: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
    monthNamesShort: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
    dayNames: [
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',
      'Chủ nhật',
    ],
    dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  };
  LocaleConfig.defaultLocale = 'vn';
  var date = Moment().format(' YYYY-MM-DD');
  return (
    <View>
      <View style={styles.calendarContainer}>
        <Calendar
          renderArrow={(direction) => (
            <Icon name={`angle-${direction}`} size={28} />
          )}
          onDayPress={(day) => {
            console.log('selected day', day);
            setModalVisible(true);
          }}
          minDate={date}
          hideDayNames={true}
          disableAllTouchEventsForDisabledDays={true}
        />
      </View>
      <BookingTimeModal
        closeModal={() => setModalVisible(false)}
        modalVisible={modalVisible}
      />
      <View style={styles.notificationContainer}>
        <BookingSuccesNotification time={'8:30 PM'} />
      </View>
      <BottomButton
        onPress={() => props.navigation.navigate('BookingDetailView')}
        title="Tiếp tục"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    margin: 20,
    marginBottom: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    borderColor: 'grey',
    borderWidth: 0.5,
    elevation: 8,
  },
  calendarContainer: {
    margin: 20,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    borderColor: 'grey',
    elevation: 8,
    borderWidth: 0.5,
  },
});
