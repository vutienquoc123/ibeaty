import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

function Blogs(props) {
    
    return (
        <View style={{ height: 250, width: 300, marginLeft: 20,borderRadius:20,backgroundColor:'#fff' }}>
            <View style={{ flex: 3 }}>
                <Image source={props.imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'stretch' }}
                />
                
            </View>
        <View style={{ flex: 2, paddingLeft: 10, paddingTop: 10 ,height:30}}>
            <Text style={{ fontSize:15,letterSpacing:1 }}>{props.name}</Text>
            <Text>{props.content}</Text>
        </View>
        </View>
        
        );
    
}
export default Blogs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});