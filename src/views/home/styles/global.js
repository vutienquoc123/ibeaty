import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
//   paragraph: {
//     marginVertical: 8,
//     lineHeight: 20,
//   },
  container: {
    flex: 1,
    padding: 10,
  },
  headerEndow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleEndow:{
    fontWeight:'bold',
    fontSize:20
  },
  viewAll:{
    color:'red',
    fontSize:15 ,
    marginTop:10,
  },  
  blogs:{
    marginTop:20,
  },
  imgDetail:{
    height:250,
  },
  contentDetail:{
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  textDetail:{
    fontSize:20,
    // fontWeight:'bold'
  },
  Details:{
    flex:1,
    padding:10,
  },
  cont:{
    marginTop:10,
  },
  buttonOrder:{
    borderRadius:50,
    height:50,
    overflow:"hidden",
    backgroundColor:'#f78972',
    justifyContent:'center'
  }
});