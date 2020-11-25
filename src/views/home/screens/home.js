import React,{useState} from 'react';
import { StyleSheet, View, Text,Button,FlatList ,TouchableOpacity,ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import Story from './component/story'
import Blog from './component/blogs'
export default function Home({ navigation }) {
    // const [reviews, setReviews] = useState([
    //     { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    //     { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    //     { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    //   ]);
    
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.endow}>
        <View style={globalStyles.headerEndow}>
          <View>
          <Text style={globalStyles.titleEndow}>Ưu đãi hàng ngày</Text>
          </View>
          <View >
          <Text style={globalStyles.viewAll}>Xem tất cả</Text>
          </View>
        </View>
        <View style={{ height: 250, marginTop: 20 ,marginLeft:-20,}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Story imageUri={require('../img/1.png')}
            name="Brazilian Bikini"
            content="lucias health and beaty"
            />
            </TouchableOpacity>
            <Story imageUri={require('../img/2.png')}
            name="Experiences"
            
           />
          </ScrollView>
        </View>
      </View>
      <View style={globalStyles.blogs}>
      <View style={globalStyles.headerEndow}>
          <View>
          <Text style={globalStyles.titleEndow}>Blog</Text>
          </View>
          <View >
          <Text style={globalStyles.viewAll}>Xem tất cả</Text>
          </View>
        </View>
        <View style={{ height: 250, marginTop: 20 ,marginLeft:-20,}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            <Blog imageUri={require('../img/blog_1.png')}
            name="Brazilian Bikini"
            content="lucias health and beaty"

            />
            <Blog imageUri={require('../img/blog_2.png')}
            name="Experiences"
           />
          </ScrollView>
        </View>
      </View>

    </View>
    // {/* <FlatList data={reviews} renderItem={({ item }) => (
    //     <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
    //       <Text style={globalStyles.titleText}>{ item.title }</Text>
    //     </TouchableOpacity>
    //   )} /> */}
  );
}