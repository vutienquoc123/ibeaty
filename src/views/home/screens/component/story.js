import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,TouchableOpacity
} from "react-native";

function Story(props,{ navigation }) {
    
    return (
        
        <View style={{ height: 250, width: 300, marginLeft: 20,borderRadius:20,backgroundColor:'#fff' }}>
            <View style={{ flex: 3 }}>
                <Image source={props.imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'stretch' }}
                />
                <View style={{ width:70,heigth:100 ,position:'absolute',right:0,bottom:0,backgroundColor:"#453b38",justifyContent:'center',alignItems:'center',opacity:0.8 }}>
                <Text style={{ color:'white',fontSize:20 }}>abc</Text>
                </View>
                
            </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 ,height:30}}>
            <Text style={{ fontSize:15,letterSpacing:1 }}>{props.name}</Text>
            <Text>{props.content}</Text>
        </View>
        </View>
       
        );
    
}
export default Story;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});