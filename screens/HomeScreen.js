import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
// import MainInfo from '../components/ProfilePage/MainInfo';
// import Ads from '../components/ProfilePage/Ads';

const HomeScreen = () => {
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
            {/* <MainInfo />
            <Ads /> */}
        </Container>
    )
}


const NavbarProfileRow = styled.View`
    flex-direction: row;
    justifyContent: space-between;
    padding: 15px;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen