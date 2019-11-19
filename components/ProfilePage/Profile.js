import React from 'react';
import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import MainInfo from './MainInfo/MainInfo';
import Ads from './Ads/Ads'


const Profile = () => {
    return (
        <Container>
            <NavbarProfileRow>
                <TouchableOpacity>
                    <Feather name="menu" size={22} color="#008fb3" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="share-2" size={22} color="#008fb3" />
                </TouchableOpacity>
            </NavbarProfileRow>
            <MainInfo/>
            <Ads/>
        </Container>
    );
}


const NavbarProfileRow = styled.View`
    flex-direction: row;
    justifyContent: space-between;
    padding: 15px;
`;

const Container = styled.View`
  flex: 1;
  margin-top:25px;
`;

export default Profile