//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components


export default class Screen1 extends React.Component {
  //Screen1 Component

  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/drawer.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  // static navigationOptions = {
  //   headerTitle:'Shailesh',
  //   headerLeft:<HomeIcon/>,
  //   drawer: () => ({
  //     label: 'Screen1',
  //     icon: ({ tintColor }) => (
  //       <Image
  //         source={require('../images/drawer.png')}
  //         style={[styles.icon, {tintColor: tintColor}]}
  //       />
  //     ),
  //   }),
  // }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
