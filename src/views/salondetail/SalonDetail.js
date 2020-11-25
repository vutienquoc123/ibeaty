import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../components/text';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import MaCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapSalon from './MapSalon';
import {Rating} from 'react-native-ratings';

const SalonDetail = (props) => {
  return (
    <View style={styles.SalonDetail}>
      <View style={styles.header}>
        <FontAwsome
          onPress={() => {
            props.navigation.navigate('MapView');
          }}
          name="angle-left"
          size={35}
          color="white"
        />
        <View style={{flexDirection: 'row'}}>
          <FontAwsome name="share-square-o" size={30} color="white" />
          <FontAwsome
            name="heart-o"
            size={30}
            color="white"
            style={{marginLeft: 20}}
          />
        </View>
      </View>

      <ScrollView>
        <View>
          <Swiper
            style={{height: 250}}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={{
              bottom: 50,
            }}>
            <View>
              <Image
                style={styles.imgSlide}
                source={{uri: 'https://ibeau.vn/images/homepage/slide1.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.imgSlide}
                source={{uri: 'https://ibeau.vn/images/homepage/slide1.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.imgSlide}
                source={{uri: 'https://ibeau.vn/images/homepage/slide1.jpg'}}
              />
            </View>
          </Swiper>
          <View style={styles.infoSalon}>
            <View style={styles.infoDeatail}>
              <Image
                resizeMode="stretch"
                style={styles.imgSalon}
                source={{uri: 'https://ibeau.vn/images/homepage/slide1.jpg'}}
              />
              <View style={styles.textInfo}>
                <Text style={styles.titleIntro}>Name Salon</Text>
                <View style={styles.infoContact}>
                  <FontAwsome name="phone" size={20} color="#cdcdcd" />
                  <Text style={styles.textContact}>0984468257</Text>
                </View>
                <View style={styles.infoContact}>
                  <MaCIcon
                    name="email-send-outline"
                    size={20}
                    color="#cdcdcd"
                  />
                  <Text style={styles.textContact}>ibeauvn@info.vn</Text>
                </View>
                <View style={styles.infoContact}>
                  <MaCIcon name="web" size={20} color="#cdcdcd" />
                  <Text style={styles.textContact}>www.hairsalon.com.vn</Text>
                </View>
              </View>
            </View>
            <View>
              <LinearGradient
                colors={['#fd9b7b', '#ef6f64']}
                style={styles.buttonMessage}>
                <MaCIcon name="email-send-outline" size={24} color="white" />
                <Text style={styles.sendMess}>GỬI TIN NHẮN</Text>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View style={styles.optionSalon}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ListService');
            }}
            style={styles.imgOption}>
            <Image
              style={styles.iconOption}
              source={require('../../assets/Image/icon_tocservice.png')}
            />
            <Text>Dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ReviewStaff');
            }}
            style={styles.imgOption}>
            <Image
              style={styles.iconOption}
              source={require('../../assets/Image/icon_staff.png')}
            />
            <Text>Nhân viên</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ReviewSalon');
            }}
            style={styles.imgOption}>
            <Image
              style={styles.iconOption}
              source={require('../../assets/Image/icon_sao.png')}
            />
            <Text>Đánh giá</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('DetailSalon');
            }}>
            <View style={styles.imgOption}>
              <Image
                style={styles.iconOption}
                source={require('../../assets/Image/icon_thuvien.png')}
              />
              <Text>Thư viện</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.introsalon}>
          <Text style={styles.titleIntro}>Giới thiệu</Text>
          <View style={styles.infoRating}>
            <View style={{justifyContent: 'space-between'}}>
              {/* <Text style={styles.rating}>5.0</Text> */}
              <Rating
                showRating
                type="custom"
                ratingColor="#ff7800"
                readonly={true}
                startingValue={4.8}
                imageSize={20}
              />
              <Text style={styles.numofrating}>40 ratings</Text>
            </View>
            <View style={{marginLeft: 20}}>
              <View style={styles.detailRating}>
                <Text>5</Text>
                <View style={styles.dive_rating5} />
              </View>
              <View style={styles.detailRating}>
                <Text>4</Text>
                <View style={styles.dive_rating5} />
              </View>
              <View style={styles.detailRating}>
                <Text>3</Text>
                <View style={styles.dive_rating5} />
              </View>
              <View style={styles.detailRating}>
                <Text>3</Text>
                <View style={styles.dive_rating5} />
              </View>
              <View style={styles.detailRating}>
                <Text>1</Text>
                <View style={styles.dive_rating5} />
              </View>
            </View>
          </View>
          <Text>
            Chúng tôi tin rằng, nhu cầu làm đẹp là một nhu cầu chính đáng và
            ngày càng được mọi người quan tâm nhiều hơn. Chính vì vậy, trong
            tương lai, iBeau sẽ phát triển để trở thành một mạng xã hội làm đẹp
            hàng đầu Việt Nam, là người bạn không thể thiếu, là trợ thủ đắc lực
            trên hành trình làm đẹp của tất cả mọi người.
          </Text>
        </View>

        <MapSalon />
      </ScrollView>
    </View>
  );
};

export default SalonDetail;

const styles = StyleSheet.create({
  SalonDetail: {
    backgroundColor: '#f4f5f8',
  },
  header: {
    flex: 1,
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
    position: 'absolute',
    zIndex: 1,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  imgSlide: {
    height: '100%',
  },
  infoSalon: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    position: 'absolute',
    top: '86%',
    alignSelf: 'center',
  },
  imgSalon: {
    height: 120,
    width: 120,
    borderRadius: 80,
  },
  infoDeatail: {
    flexDirection: 'row',
    marginTop: 18,
    marginHorizontal: 18,
  },
  infoContact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContact: {
    color: '#cdcdcd',
    marginLeft: 10,
  },
  textInfo: {
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  buttonMessage: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 30,
  },
  sendMess: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
  },
  optionSalon: {
    flexDirection: 'row',
    marginTop: '55%',
    marginBottom: 20,
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  imgOption: {
    height: 65,
    width: 65,
    borderColor: '#fd9b7b',
    borderWidth: 1.5,
    borderRadius: 50,
    alignItems: 'center',
  },
  iconOption: {
    resizeMode: 'contain',
    margin: '25%',
    height: 30,
  },
  dive_rating5: {
    backgroundColor: '#fd9b7b',
    height: 5,
    width: '60%',
    marginLeft: 15,
  },
  introsalon: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  titleIntro: {
    fontSize: 22,
    fontWeight: '500',
  },
  detailRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRating: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 30,
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  numofrating: {
    fontSize: 18,
  },
});
