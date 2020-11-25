import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArrowDrop from '../arrow-dropdown/ArrowDrop';

const CardReview = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cardStaff}>
        <View style={styles.imgAndInfo}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://ibeau.vn/images/homepage/slide1.jpg'}}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.dateOrjob}>
              <Icon name={props.icon} size={18} color="gray" />
              <Text style={styles.date}>{props.dateOrjob}</Text>
            </View>
            <View>
              <Rating
                type="custom"
                ratingColor="#ff7800"
                readonly="true"
                startingValue={4.3}
                imageSize={20}
              />
            </View>
            <Text style={styles.preDes}>Afdfghjjjngdjgsjhd......</Text>
          </View>
        </View>
        <ArrowDrop
          isActive={isActive}
          setIsActive={(boolean) => {
            setIsActive(boolean);
          }}
        />
      </View>

      {isActive ? (
        <View>
          <View style={styles.divide} />
          <View>
            <Text style={styles.des}>
              adfgh jkj hgfdfg hjkliuytr ertyj knbvc xcvbnk uy t rtyuj drt yui
              kjhg drtyu ikjhg vbnkiu ytr rfgh jbvd rtyuh gertyuiokjhg
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CardReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  cardStaff: {
    flexDirection: 'row',
    padding: 8,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgAndInfo: {
    flexDirection: 'row',
  },
  avatar: {
    height: 120,
    minWidth: '35%',
    borderRadius: 15,
  },
  info: {
    alignItems: 'flex-start',
    marginLeft: '10%',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  dateOrjob: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  date: {
    marginLeft: 10,
    fontSize: 16,
  },
  preDes: {
    marginTop: 8,
    fontSize: 16,
  },
  IconArrow: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    height: 30,
    width: 30,
    alignItems: 'center',
  },
  arrowdrop: {
    // position:'absolute',
    // padding : 5,
  },
  divide: {
    height: 1,
    marginBottom: 10,
    backgroundColor: '#999999',
    width: '96%',
    alignSelf: 'center',
  },
  des: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
  },
});
