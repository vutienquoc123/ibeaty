import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TitleService from '../../components/info-service-salon/TitleService';

const ListService = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.item_service}>
          <TitleService
            isActive={isActive}
            setIsActive={(boolean) => {
              setIsActive(boolean);
            }}
          />
        </View>

        <View style={styles.item_service}>
          <TitleService
            isActive={isActive1}
            setIsActive={(boolean) => {
              setIsActive1(boolean);
            }}
          />
        </View>

        <View style={styles.item_service}>
          <TitleService
            isActive={isActive2}
            setIsActive={(boolean) => {
              setIsActive2(boolean);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ListService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item_service: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '90%',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
