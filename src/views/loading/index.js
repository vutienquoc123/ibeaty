/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function index(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const authLoading = () => {
    setTimeout(() => {
      props.navigation.navigate('MainApp');
    }, 1500);
  };

  useEffect(() => {
    authLoading();
    return () => {
      clearTimeout();
    };
  }, [authLoading]);

  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}
