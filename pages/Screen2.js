//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components

export default class Screen2 extends React.Component {
  //Screen2 Component
  // static navigationOptions = {
  //   drawerLabel: 'Screen TWo'
  // }
  static navigationOptions = {
    drawer: () => ({
      label: 'Screen3',
      icon: ({ tintColor }) => (
        <Image
          source={require('../images/drawer.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 2 </Text>
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
