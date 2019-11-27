import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
// import styled from 'styled-components/native';

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ alignItems: "flex-start", padding: 15, flexDirection: "row", justifyContent: "space-between"}}
                >
                    <Feather name="menu" size={22} color="#008fb3" 
                    onPress={this.props.navigation.openDrawer}
                    />
                    <Feather name="share-2" size={22} color="#008fb3" />
                </TouchableOpacity>
                <View style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.text}>{this.props.name} Screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: 25,
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
}); 