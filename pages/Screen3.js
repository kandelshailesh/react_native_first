//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components

// drawerIcon: () => (
//   <Image
//   source={require('../images/drawer.png')}
//     style={{width: 30, height: 30, borderRadius: 15}}
//   />
// )

export default class Screen3 extends React.Component {
  //Screen3 Component
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
        <Text style={{ fontSize: 23 }}> Screen 3 </Text>
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
