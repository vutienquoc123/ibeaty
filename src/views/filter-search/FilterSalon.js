import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import LinearGradient from 'react-native-linear-gradient';
import TitleFilter from '../../components/title-filter-card/TitleFilter';

const FilterSalon = () => {
  return (
    <View style={styles.container}>
      <TitleFilter icon="map-marker-alt" nameFilter="Quận" />
      <TitleFilter icon="cut" nameFilter="Dịch vụ" />
      <TitleFilter icon="expand-arrows-alt" nameFilter="Tiện ích" />
      <LinearGradient colors={['#fd9b7b', '#ef6f64']} style={styles.btnSearch}>
        <Text style={styles.txtSearch}>TÌM KIẾM</Text>
      </LinearGradient>
    </View>
  );
};

export default FilterSalon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f5f8',
    flex: 1,
  },
  btnSearch: {
    marginTop: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 100,
    marginVertical: 5,
  },
  txtSearch: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
