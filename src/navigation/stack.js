import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookingView from './tab';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import BookingServiceView from '../views/booking/bookingservice';
import BookingStylistView from '../views/booking/bookingstylist';
import BookingDateView from '../views/booking/bookingdate';
import BookingDetailView from '../views/booking/bookingdetail';
import MapView from '../views/map';
import HomeView from '../views/home';
import LoginView from '../views/login/login/Login';
import RegisterView from '../views/login/register/Register';
import ProfileView from '../views/profile/profile/Profile';
import ChangePassView from '../views/profile/changePass/ChangePass';
import FilterSalon from '../views/filter-search/FilterSalon';
import SalonDetail from '../views/salondetail/SalonDetail';
import ListService from '../views/listServiceofSalon/ListService';
import ReviewSalon from '../views/review/ReviewSalon';
import MyTabs from './tab';
import ListSalons from '../views/listsalon/ListSalons';
import HomeScreen from '../views/home/screens/home';
import DetailScreen from '../views/home/screens/detail';
import MesScreen from '../views/home/screens/messenger';
import CommunityScreen from '../views/home/screens/community';
import TabContent from './tab';
const WIDTH = Dimensions.get('window').width;
const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{
        width: 160,
        height: 50,
        resizeMode: 'stretch',
        marginLeft: WIDTH * 0.2,
      }}
      source={require('../views/home/img/Logo.png')}
    />
  );
}

export const BookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'salmon',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{title: 'Đăng ký các dịch vụ'}}
        name="BookingServiceView"
        component={BookingServiceView}
      />
      <Stack.Screen
        options={{title: 'Đăng ký nhân viên phục vụ'}}
        name="BookingStylistView"
        component={BookingStylistView}
      />
      <Stack.Screen
        options={{title: 'Đặt lịch'}}
        name="BookingDateView"
        component={BookingDateView}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="BookingDetailView"
        component={BookingDetailView}
      />
      <Stack.Screen name="BookingView" component={BookingView} />
    </Stack.Navigator>
  );
};

export const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'salmon',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="MapView" component={MapView} />
      <Stack.Screen
        options={{title: ''}}
        name="FilterSearch"
        component={FilterSalon}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DetailSalon"
        component={SalonDetail}
      />
      <Stack.Screen
        options={{title: 'Các Dịch Vụ'}}
        name="ListService"
        component={ListService}
      />
      <Stack.Screen
        options={{title: 'Nhận Xét'}}
        name="ReviewSalon"
        component={ReviewSalon}
      />
      <Stack.Screen
        options={{title: 'Nhân Viên'}}
        name="ReviewStaff"
        component={ReviewSalon}
      />
      <Stack.Screen name="ListSalon" component={ListSalons} />
    </Stack.Navigator>
  );
};

export const DetailSalonStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'salmon',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="DetailSalon" component={SalonDetail} />
      <Stack.Screen name="ListSalon" component={ListSalons} />
    </Stack.Navigator>
  );
};

export const HomeStackScreen = ({navigation}) => {
  // if(route.state && route.state.index >0){
  //   navigation.setOption({tabBarVisible:false})
  // }else{
  //   navigation.setOption({tabBarVisible: true})
  // }
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="card"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f78972',
          height: 60,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={TabContent}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor="#f78972"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
          headerRight: () => (
            <Icon.Button
              name="notifications"
              size={30}
              backgroundColor="#f78972"></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Name Salon',
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const MesStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f78972',
        height: 60,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Moment"
      component={MesScreen}
      options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            backgroundColor="#f78972"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="notifications"
            size={30}
            backgroundColor="#f78972"
          />
        ),
      }}
    />
  </Stack.Navigator>
);
export const CommunityStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f78972',
        height: 60,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Community"
      component={CommunityScreen}
      options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            backgroundColor="#f78972"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="notifications"
            size={30}
            backgroundColor="#f78972"
          />
        ),
      }}
    />
  </Stack.Navigator>
);
export const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="LoginView" component={LoginView} />
      <Stack.Screen name="RegisterView" component={RegisterView} />
    </Stack.Navigator>
  );
};
export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileView" component={ProfileView} />
      <Stack.Screen name="ChangePassView" component={ChangePassView} />
    </Stack.Navigator>
  );
};
