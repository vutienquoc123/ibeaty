import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Search = (props) => {
  return (
    <View style={styles.search_filter}>
      <View style={styles.search}>
        <Ionicon
          style={styles.iconSearch}
          name="search-outline"
          size={25}
          color="gray"
        />
        <TextInput
          style={styles.inputSearch}
          placeholderTextColor="gray"
          placeholder="Tìm kiếm..."
        />
      </View>
      <TouchableOpacity style={styles.filter}>
        <MaterialCommunityIcons
          onPress={() => {
            props.navigation.navigate('FilterSearch');
          }}
          name="filter-variant-plus"
          color="#ef4f64"
          size={25}
          style={styles.iconFilter}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search_filter: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    minHeight: '8%',
    width: '100%',
    top: 24,
    zIndex: 1,
    marginHorizontal: 15,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    width: '75%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  filter: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: '110%',
    height: '100%',
    alignItems: 'center',
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  iconFilter: {
    marginVertical: '20%',
  },
  iconSearch: {
    marginHorizontal: 10,
  },
  inputSearch: {
    width: '100%',
  },
});
