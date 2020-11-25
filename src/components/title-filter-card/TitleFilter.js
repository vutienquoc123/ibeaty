import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ArrowDrop from '../arrow-dropdown/ArrowDrop';
import FilterExpandCard from '../filter-expand-card/FilterExpandCard';
const TitleFilter = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={styles.filter}>
      <View style={styles.filterNonExpand}>
        <View style={styles.IconAndTitle}>
          <View style={styles.iconTitle}>
            <Icon
              style={styles.icon}
              name={props.icon}
              size={22}
              color="gray"
            />
          </View>
          <Text style={styles.title}>{props.nameFilter}</Text>
        </View>
        <ArrowDrop
          isActive={isActive}
          setIsActive={(boolean) => {
            setIsActive(boolean);
          }}
        />
      </View>
      {isActive ? (
        <View>
          <View style={styles.divide} />
          <View>
            <FilterExpandCard detailFilter="Hoàn Kiếm" />
            <FilterExpandCard detailFilter="Cầu Giấy" />
            <FilterExpandCard detailFilter="Nam Từ Liêm" />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default TitleFilter;

const styles = StyleSheet.create({
  filter: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    minHeight: '10%',
    paddingHorizontal: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  filterNonExpand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  IconAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTitle: {
    height: 45,
    width: 45,
    borderRadius: 50,
    borderColor: '#cccccc',
    borderWidth: 1.5,
  },
  icon: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '600',
  },
  divide: {
    height: 1,
    marginBottom: 10,
    backgroundColor: '#cccccc',
    width: '96%',
    alignSelf: 'center',
  },
});
