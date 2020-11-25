import React from 'react'
import { StyleSheet, View, Text,Button ,FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
export default function Messenger() {
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>tin nhắn</Text>
       </View>
    )
}
