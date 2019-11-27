import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
    return(
        <Container>
            <NavbarProfileRow>
                <TouchableOpacity>
                    <Feather name="menu" size={22} color="#008fb3" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="share-2" size={22} color="#008fb3" />
                </TouchableOpacity>
            </NavbarProfileRow>
        </Container>
    )
}

export default ProfilePage