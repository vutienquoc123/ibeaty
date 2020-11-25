import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ListSalons from '../listsalon/ListSalons';
import SalonOnMap from './SalonOnMap';
import Search from './Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MapAllSalon = (props) => {
  const [page, setPage] = useState(0, 1);
  const changePage = (num) => {
    setPage(num);
  };
  const check = () => {
    if (page === 0) {
      return <SalonOnMap navigation={props.navigation} />;
    }
    if (page === 1) {
      return <ListSalons navigation={props.navigation} />;
    }
  };
  return (
    <View style={styles.map}>
      <Search navigation={props.navigation} />
      {check()}
      <TouchableOpacity style={styles.showOnMap}>
        {page === 0 ? (
          <MaterialCommunityIcons
            onPress={() => changePage(1)}
            style={styles.iconShowList}
            name="menu"
            size={38}
            color="#ef4f64"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={() => changePage(0)}
            style={styles.iconShowOnMap}
            name="map-marker-radius"
            size={40}
            color="#ef4f64"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MapAllSalon;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#f4f5f8',
  },
  showOnMap: {
    flex: 1,
    height: 55,
    width: 55,
    borderRadius: 35,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '10%',
    right: 20,
    zIndex: 1,
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
  iconShowOnMap: {
    marginVertical: '10%',
  },
  iconShowList: {
    marginVertical: '15%',
  },
});
