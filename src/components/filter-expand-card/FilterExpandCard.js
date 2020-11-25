import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import RadioButton from '../radioButton';
const FilterExpandCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.filterExpand}>
      <RadioButton
        isSelected={isSelected}
        setIsSelected={(boolean) => {
          setIsSelected(boolean);
        }}
      />
      <Text style={styles.txtFilter}>{props.detailFilter}</Text>
    </View>
  );
};

export default FilterExpandCard;

const styles = StyleSheet.create({
  filterExpand: {
    // marginHorizontal: 20,
    flexDirection: 'row',
    padding: 15,
  },
  txtFilter: {
    fontSize: 16,
    marginLeft: 15,
  },
});
