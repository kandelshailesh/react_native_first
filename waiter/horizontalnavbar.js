import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
// import { ListItem,List} from 'react-native-elements';
// import DetailsScreen from './waiter/waiterfirst';
import { StyleSheet, FlatList,Text,Modal,Alert,TouchableHighlight ,Dimensions,View,TextInput,Button,Image,TouchableOpacity } from 'react-native';

import { StitchClientConfiguration } from 'mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration';

// var client;

// const client1= stitch.Stitch.initializeDefaultAppClient('<your-app-id>');


const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
window.navigator.userAgent= 'react-native';
import io  from 'socket.io-client/dist/socket.io';
Stitch.initializeDefaultAppClient('digital-menu-gxnkk').then(client => {
  // use the client

  });

 

  import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
  
  class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }
  
  const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
  });
  
  export default createAppContainer(TabNavigator);