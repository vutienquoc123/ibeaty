import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {Dimensions} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  // console.log('a',props);
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginTop: -HEIGHT * 0.25,
                marginLeft: -WIDTH * 0.55,
                backgroundColor: '#f37b6a',
                borderBottomLeftRadius: WIDTH * 10,
                borderBottomRightRadius: WIDTH * 10,
                height: HEIGHT * 0.5,
                width: WIDTH * 1.7,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  borderWidth: 10,
                  borderColor: '#f58d7b',
                  marginTop: HEIGHT * 0.3,
                }}>
                <Image
                  source={{
                    uri:
                      'https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5.jpg',
                  }}
                  // size={80}
                  style={{width: 100, height: 100, borderRadius: 50}}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <Title style={{color: '#fff', fontWeight: 'bold'}}>Ibeat</Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="person" color={color} size={25} />
              )}
              label="Tài khoản của tôi "
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            {/* <Icon name="home-outline" size={30} color="black" /> */}

            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="wallet" color={color} size={size} />
              )}
              label="Ví của bạn"
              onPress={() => {
                props.navigation.navigate('Detail');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="heart" color={color} size={size} />
              )}
              label="Yêu thích"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="qr-code" color={color} size={size} />
              )}
              label="Mã giới thiệu"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon
                  name="md-information-circle-sharp"
                  color={color}
                  size={size}
                />
              )}
              label="Giới thiệu"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="log-out-outline" color={color} size={size} />
              )}
              label="Đăng xuất"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                    <Icon 
                    name="exit-to-app" 
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => {signOut()}}
            />
        </Drawer.Section> */}
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    //   paddingLeft: 20,
  },
  title: {
    fontSize: 16,

    fontWeight: 'bold',
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderColor: '#e7e6e6',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },

  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
