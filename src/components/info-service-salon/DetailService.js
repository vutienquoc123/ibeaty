import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../components/text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DetailService = () => {
  const [showMore, setshowMore] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.service}>
        <View style={styles.nameService}>
          <View style={styles.iconService}>
            <Image
              style={styles.icon}
              source={require('../../assets/Image/cut_service.png')}
            />
          </View>
          <Text style={styles.txtName}>Dịch vụ 1</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setshowMore(!showMore);
            console.log(showMore);
          }}>
          {showMore ? (
            <MaterialCommunityIcons name="minus" size={24} color="#999999" />
          ) : (
            <Ionicons name="add" size={26} color="#999999" />
          )}
        </TouchableOpacity>
      </View>
      {showMore === true ? (
        <View style={styles.showMore}>
          <View style={styles.devideDash} />
          <Text style={styles.txtInfo}>
            guyfg ufgufuf uiiiig ygeb yyuf ufhuh u hg gueg euyg tegshu g uajhd
            gg iwihsb uwuidsihuui u iihh hhush bsu siuhuss yyissu b ysyyss
            y8sisisi
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default DetailService;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 15,
    width: '100%',
    padding: 8,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameService: {
    flexDirection: 'row',
  },
  iconService: {
    height: 52,
    width: 52,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderWidth: 1.5,
  },
  icon: {
    marginVertical: '16%',
    alignSelf: 'center',
  },
  showMore: {
    marginTop: 10,
  },
  devideDash: {
    // textDecorationStyle: 'dashed',
    // lineHeight : 1,
    // textDecorationColor :'gray',
    backgroundColor: 'gray',
    height: 1,
    width: '100%',
    marginVertical: 5,
  },
  txtName: {
    fontSize: 18,
    marginLeft: 10,
    alignSelf: 'center',
  },
  txtInfo: {
    fontSize: 16,
    marginLeft: 10,
  },
});
