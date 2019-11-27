import React from 'react';

import { DrawerNavigatorItems } from "react-navigation-drawer";

import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, ScrollView } from 'react-native';

import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';

export default Sidebar = props => (
    <ScrollView style={styles.ScrollView}>
        <ImageBackground style={{width: undefined, padding:10, paddingTop:17, paddingLeft:17, backgroundColor:"#008fb3"}}>
            <Image source={require("../assets/profile-pic.jpg")} style={styles.profile}/>
            <Text style={styles.TextProfile}>Name</Text>
            <Text style={styles.TextProfile}>laznevoy86@gmail.com</Text>
        </ImageBackground>
        <View style={styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ScrollView: {
        marginTop: 24,
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginBottom: 15
        // borderWidth: 3,
        // borderColor: "#FFF",
    }, 
    TextProfile: {
        color: "#FFF"
    }
});