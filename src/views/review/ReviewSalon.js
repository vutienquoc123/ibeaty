import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardReview from '../../components/card-staff/CardReview';

const ReviewSalon = () => {
  return (
    <View style={styles.ReviewSalon}>
      <ScrollView>
        <CardReview name="Nhu chua tung" icon="cut" dateOrjob="Cắt,Gội,Nhuộm" />
        <CardReview
          name="Nhu chua xoac"
          icon="calendar"
          dateOrjob="Cắt,Gội,Nhuộm"
        />
        <CardReview
          name="Nhu chua tung yeu"
          icon="cut"
          dateOrjob="Cắt,Gội,Nhuộm"
        />
        <CardReview
          name="Khoc vs cha Sau"
          icon="calendar"
          dateOrjob="Cắt,Gội,Nhuộm"
        />
      </ScrollView>
    </View>
  );
};

export default ReviewSalon;

const styles = StyleSheet.create({
  ReviewSalon: {
    flex: 1,
  },
});
