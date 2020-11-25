import React from 'react';
import {StyleSheet, View} from 'react-native';
import InputText from './InputText';
import Sex from './Sex';
import Date from './Date';

import ic_user from '../img/user.png';
import ic_mail from '../img/mail.png';
import ic_phone from '../img/phone.png';
import ic_address from '../img/address.png';
import Button from './Button';

const view = (props) => {
  const onSave = () => {
    console.log('save');
  };

  const onChangePass = () => {
    props.changepass();
  };
  return (
    <View style={styles.container}>
      <InputText
        img={ic_user}
        name="name"
        title="Họ và Tên:"
        placeholder="tên của bạn"
      />
      <InputText
        img={ic_mail}
        name="mail"
        title="Mail:"
        placeholder="abc@gmail.com"
      />
      <InputText
        img={ic_phone}
        name="phone"
        title="Số Điện Thoại:"
        placeholder="số điện thoại của bạn"
      />
      <InputText
        img={ic_address}
        name="address"
        title="Địa chỉ: "
        placeholder="nơi bạn sống"
      />
      {/* <View style={styles.dropdown}> */}
      <Sex />
      <Date />
      {/* </View> */}
      <View style={{marginTop: 20}} />
      <Button
        name="Đổi mật khẩu"
        color1="#ffffff"
        color2="#f47d6b"
        onpress={onChangePass}
      />
      <Button
        name="Lưu thay đổi"
        color1="#f47d6b"
        color2="#ffffff"
        onpress={onSave}
      />
    </View>
  );
};

export default view;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dropdown: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
