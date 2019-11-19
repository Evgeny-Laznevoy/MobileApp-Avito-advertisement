import React from 'react';
import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ButtonTrans from '../ButtonTransition/ButtonTransition';

const MainInfo = () => {
    return (
        <ProfileInfo>
            <NavbarProfileRow>
                <TouchableOpacity>
                    <GroupInfo>
                        <GroupTitle>Name</GroupTitle>
                        <Text>Частное лицо</Text>
                        <Text>ID 151601480</Text>
                        <StarRaiting>
                            <Entypo name="star" size={20} color="#ff9900" />
                            <Entypo name="star" size={20} color="#ff9900" />
                            <Entypo name="star" size={20} color="#ff9900" />
                            <Entypo name="star" size={20} color="#ff9900" />
                            <Entypo name="star" size={20} color="#ff9900" />
                        </StarRaiting>
                        <Text style={{ color: '#008fb3', marginTop: 5, marginBottom: 10 }}> 3 отзыва </Text>
                    </GroupInfo>
                </TouchableOpacity>
                <FontAwesome name="circle" size={85} color="#ff9900" />
            </NavbarProfileRow>
            <ContactInfo>
                <InfoGroup>
                    <IconInfoProfile>
                        <Feather name="mail" size={20} />
                    </IconInfoProfile>
                    <Text>Noname@gmail.com</Text>
                </InfoGroup>
                <InfoGroup>
                    <IconInfoProfile>
                        <Entypo name="location" size={20} />
                    </IconInfoProfile>
                    <Text>Location</Text>
                </InfoGroup>
                <InfoGroup>
                    <IconInfoProfile>
                        <FontAwesome name="calendar" size={20} />
                    </IconInfoProfile>
                    <Text >Дата регистрации</Text>
                </InfoGroup>
            </ContactInfo>
            <ButtonTrans />
        </ProfileInfo>
    );
}

const NavbarProfileRow = styled.View`
    flex-direction: row;
    justifyContent: space-between;
    padding: 15px;
`;

const IconInfoProfile = styled.Text`
    margin-right: 30px;
    color: #C0C0C0;
`;

const InfoGroup = styled.View`
    margin-bottom: 25px;
    flex-direction: row;
`;

const ContactInfo = styled.View`
    margin-left: 17px;
`;

const StarRaiting = styled.View`
    flex-direction: row;
`;


const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const ProfileInfo = styled.View`
    
`;

const GroupInfo = styled.View`
`;


export default MainInfo