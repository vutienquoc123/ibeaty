import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Rating} from 'react-native-ratings';

export default function SalonOnMap() {
  const markers = [
    {
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: 'Amazing Food Place',
      description: 'This is the best food place',
      // image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: 'Second Amazing Food',
      description: 'This is the second best food place',
      // image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: 'Third Amazing',
      description: 'This is the third best food place',
      // image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: 'Fourth Amazing',
      description: 'This is the fourth best food place',
      // image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: 'Fifth Amazing',
      description: 'This is the fifth best food place',
      // image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
  ];
  return (
    <View style={styles.showMap}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 22.62938671242907,
          longitude: 88.4354486029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }}>
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              // onPress={(e) => onMarkerPress(e)}
              image={require('../../assets/Image/map_marker.png')}>
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.namesalon}>{marker.title}</Text>
                    <Text style={styles.txtAddress}>{marker.description}</Text>
                    <View style={{}}>
                      <Rating
                        type="custom"
                        ratingColor="#ff7800"
                        readonly={true}
                        startingValue={marker.rating}
                        imageSize={18}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  showMap: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  bubble: {
    backgroundColor: '#fff',
    padding: 15,
    borderColor: '#ccc',
    borderRadius: 6,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  namesalon: {
    fontWeight: '700',
    fontSize: 20,
  },
  txtAddress: {
    fontSize: 16,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
});
