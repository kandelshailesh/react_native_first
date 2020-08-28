
 import React from 'react';

 import { StyleSheet, Text, View,TextInput,Button,Header,Image,TouchableOpacity } from 'react-native';

 import { createDrawerNavigator,createAppContainer } from 'react-navigation'
//  import { Button,Container,Header,Left,Right,Icon,Text } from 'native-base';
 
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/drawer.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/drawer.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const AppContainer = createAppContainer(MyDrawerNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

