import React from 'react';
import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ButtonTrans from '../ButtonTransition/ButtonTransition';

const Ads = () => {
    return (
        <AdsGroup>
            <Info>
                <GroupTitle>Объявления</GroupTitle>
                <InfoGroup>
                    <IconInfoProfile>
                        <FontAwesome name="cart-arrow-down" size={20} />
                    </IconInfoProfile>
                    <Text>Количество активных</Text>
                </InfoGroup>
            </Info>
            <ButtonTrans />
        </AdsGroup>
    );
}

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 14px;
  color: #000000;
`;

const Info = styled.View`
    margin-top: 15px;
    margin-left: 17px;
`;

const AdsGroup = styled.View`

`;

const InfoGroup = styled.View`
    margin-top: 25px;
    margin-bottom: 25px;
    flex-direction: row;
`;

const IconInfoProfile = styled.Text`
    margin-right: 30px;
    color: #C0C0C0;
`;

export default Ads