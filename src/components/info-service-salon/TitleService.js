import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import ArrowDrop from '../arrow-dropdown/ArrowDrop';
import DetailService from './DetailService';

const TitleService = (props) => {
  //   const [isActive, setIsActive] = useState(false);
  return (
    <View>
      <View style={styles.TitleService}>
        <Text style={styles.txtService}>SERVICE1</Text>
        <ArrowDrop
          isActive={props.isActive}
          setIsActive={(boolean) => {
            props.setIsActive(boolean);
          }}
        />
      </View>
      {props.isActive ? (
        <View>
          <DetailService />
          <DetailService />
          <DetailService />
        </View>
      ) : null}
    </View>
  );
};

export default TitleService;

const styles = StyleSheet.create({
  TitleService: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtService: {
    fontSize: 20,
    fontWeight: '500',
  },
});
