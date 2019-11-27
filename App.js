import React from 'react';

import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from 'react-native';

import { Feather, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListsScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen
} from "./screens";

import Sidebar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator(
  {
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions: {
      title: "Поиск объявлений",
      drawerIcon: ({tintColor}) => <Feather name="search" size={20} color={tintColor}/>
    }
  },
  MessageScreen:{
    screen: MessageScreen,
    navigationOptions: {
      title: "Сохраненные поиски",
      drawerIcon: ({tintColor}) => <Feather name="search" size={20} color={tintColor}/>
    }
  },
  ActivityScreen:{
    screen: ActivityScreen,
    navigationOptions: {
      title: "Избранное",
      drawerIcon: ({tintColor}) => <Feather name="heart" size={20} color={tintColor}/>
    }
  },
  ListsScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen
}, {
  contentComponent: props => <Sidebar {...props}/>
});

export default createAppContainer(DrawerNavigator);


// export default function App() {
//   return (
//     // <Profile/>
//     <Container>
//       <Group>
//         <GroupTitle>Name</GroupTitle>
//       </Group>
//       <Text>Частное лицо</Text>
//       <Text>ID 151601480</Text>
//     </Container>
//   );
// }



// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   ProfilePage: {
//     screen: ProfilePage,
//   }
// })

// export default createAppContainer(AppNavigator)



// import React from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import styled from 'styled-components/native'; 
// import Profile from './components/ProfilePage/Profile'


// export default function App() {
//   return (
//     <Profile/>
//     // <Container>
//     //   <Group>
//     //     <GroupTitle>Name</GroupTitle>
//     //   </Group>
//     //   <Text>Частное лицо</Text>
//     //   <Text>ID 151601480</Text>
//     // </Container>
//   );
// }
