import React from 'react';
import { StyleSheet, View, Text,Button ,FlatList,Image} from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
export default function Details({ navigation }) {
    
    
  return (
    // <NavigatorIOS navigationBarHidden={true}>
    <View style={{ flex:1 }}>
      <View style={globalStyles.imgDetail}>
          <Image source={require('../img/1.png')}
              style={{  resizeMode: "cover",height:250 }}
          />
          <Text style={{ position:'absolute',right:0,bottom:0 }}>abc</Text>
      </View>
      <View style={globalStyles.Details}>
      <View style={globalStyles.contentDetail}>

      <View >
          <Text style={globalStyles.textDetail}>Name deal</Text>
          <Text>Salon name</Text>
          <Text> <Icon name="location" color='gray' size={15}/>  Số 9 ngõ 108 Cầu Giấy ,Hà Nội </Text>
          <Text> <Icon name="time-outline" color='gray' size={15}/>  12/11 đến 12/12/2020 </Text>
          <Text> <Icon name="cut-outline" color='gray' size={15}/>  Gội sấy,tạo kiểu </Text>
          </View>
          <View >
          <Rating
          style={{ marginTop:10,backgroundColor:'#f4f5f8' }}
          ratingColor='orange'
          type='custom'
          ratingBackgroundColor='#f4f5f8'
          ratingCount={5}
          imageSize={18}
          // showRating

          />
          </View>
      </View>
      <View>
        <Text style={globalStyles.cont}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      </View>
      <View style={globalStyles.buttonOrder}>
          <Text style={{ textAlign:'center',color:'white',fontSize:20 }}>Đặt lịch ngay</Text>
      </View>
     
    
    </View>
    </View>
    // </NavigatorIOS>
  );
}

