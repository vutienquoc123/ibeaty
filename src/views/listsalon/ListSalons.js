import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../components/text';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import {Rating} from 'react-native-ratings';

const ListSalons = (props) => {
  const listSalon = [
    {
      name: 'Hair Toc Xoan',
      imgg: 'https://ibeau.vn/images/homepage/slide1.jpg',
      address: 'Dong da - Ha Noi',
      distance: '2.6km',
      rating: 3.6,
      id: '1',
    },
    {
      name: 'Hair Toc Thang',
      imgg: 'https://ibeau.vn/images/homepage/slide1.jpg',
      address: 'Dong da - Ha Noi',
      distance: '1.6km',
      rating: 4.6,
      id: '2',
    },
    {
      name: 'Hair Supper Beaty',
      imgg: 'https://ibeau.vn/images/homepage/slide1.jpg',
      address: 'Dong da - Ha Noi',
      distance: '3.6km',
      rating: 4.3,
      id: '3',
    },
    {
      name: 'No Cut No Money',
      imgg: 'https://ibeau.vn/images/homepage/slide1.jpg',
      address: 'Dong da - Ha Noi',
      distance: '2.6km',
      rating: 5,
      id: '4',
    },
  ];
  return (
    <View style={styles.listSalons}>
      <FlatList
        data={listSalon}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('DetailSalon');
            }}
            style={styles.itemSalon}>
            <Image
              style={styles.imgSalon}
              source={{
                uri: item.imgg,
              }}
            />
            <View style={styles.infoSalon}>
              <Text style={styles.namesalon}>{item.name}</Text>
              <View style={styles.address}>
                <FontAwsome name="home" color="gray" size={18} />
                <Text style={styles.textAddress}>{item.address}</Text>
              </View>
              <View style={styles.distance}>
                <FontAwsome name="map-marker" color="gray" size={18} />
                <Text style={styles.textAddress}>{item.distance}</Text>
              </View>
              <View>
                <Rating
                  readonly="true"
                  startingValue={item.rating}
                  imageSize={20}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListSalons;

const styles = StyleSheet.create({
  listSalons: {
    flex: 1,
    backgroundColor: '#f4f5f8',
    marginTop: '22%',
  },
  itemSalon: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    flex: 1,
  },
  imgSalon: {
    height: 110,
    maxWidth: 110,
    borderRadius: 15,
    marginLeft: 8,
    flex: 1,
  },
  infoSalon: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  namesalon: {
    fontWeight: '700',
    fontSize: 20,
  },
  address: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  textAddress: {
    fontSize: 16,
    marginLeft: 10,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
