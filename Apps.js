// // import React, { Component } from 'react';
// // import { View } from 'react-native';
// // import { createDrawerNavigator,createAppContainer } from 'react-navigation';
// // import { Button,Container,Header,Left,Right,Icon,Text } from 'native-base';

// // class MyHomeScreen extends React.Component {
// //   render() {
// //     return (
// //       <Container>
// //         <Header>
// //           <Left style={{ flexDirection: 'row'}}>
// //            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
// //           </Left>
// //           <Right>
// //            <Icon name="md-cart" style={{ color: 'white' }} />
// //           </Right>
// //         </Header>
// //        <View style={{ marginTop:100,marginLeft:100}}>
// //          <Button onPress={() => this.props.navigation.navigate('Notifications')} >
// //            <Text>Go to notifications</Text>
// //          </Button>
// //         </View>
// //        </Container>
// //      );
// //    }
// //  }// End of MyHomeScreen class

// // class MyNotificationsScreen extends React.Component {
// //    render() {
// //      return (
// //        <View style={{ marginTop:100,marginLeft:100}}>
// //          <Button onPress={() => this.props.navigation.goBack()} >
// //            <Text>Go back home</Text>
// //          </Button>
// //        </View>
// //      );
// //     }
// // }//End of MyNotificationsScreen class

// // const MyDrawerNavigator = createDrawerNavigator({
// //    Home:{ 
// //       screen: MyHomeScreen,
// //    },
// //    Notifications: {
// //       screen: MyNotificationsScreen,
// //    },
// //  });
 
// // const MyApp = createAppContainer(MyDrawerNavigator);

// // class App extends React.Component{
// //     render(){
// //       return(
// //         <Container>
// //           <MyApp >
// //             </MyApp >
// //         </Container>
// //       );
// //     }
// // }//End of App class





// import React from 'react';
// import { StyleSheet, Text, View,TextInput,Button,Header,Image,TouchableOpacity } from 'react-native';
// import {createAppContainer,createStackNavigator,createDrawerNavigator} from "react-navigation";
// import BootstrapStyleSheet from 'react-native-bootstrap-styles';

// import { DrawerActions } from 'react-navigation';
// import { StackActions, NavigationActions } from 'react-navigation';



// const
//   BODY_COLOR = '#000022',
//   TEXT_MUTED = '#888888';

// // custom constants
// const constants = {
//   BODY_COLOR, TEXT_MUTED,
// };

// // custom classes
// const classes = {
//   title: {
//     color: 'red',
//   }
// };

// const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
// const s = styles = bootstrapStyleSheet.create();
// // const c = bootstrapStyleSheet.constants;

// import Screen1 from './pages/Screen1';

// import Screen2 from './pages/Screen2';
// import Screen3 from './pages/Screen3';



// // import { NavigationActions } from 'react-navigation'

// class DrawerContainer extends React.Component {

//   render() {
//     const { navigation } = this.props
//     return (
//       <View style={styless.container}>
//         <Text
//           onPress={() => navigation.navigate('screen1')}
//           style={styless.uglyDrawerItem}>
//           Screen 1
//         </Text>
//         <Text
//           onPress={() => navigation.navigate('screen2')}
//           style={styless.uglyDrawerItem}>
//           Screen 2
//         </Text>
//         <Text
//           onPress={() => navigation.navigate('screen3')}
//           style={styless.uglyDrawerItem}>
//           Screen 3
//         </Text>
//       </View>
//     )
//   }
// }

// const styless = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f6f6f6',
//     paddingTop: 40,
//     paddingHorizontal: 20
//   },
//   uglyDrawerItem: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#E73536',
//     padding: 15,
//     margin: 5,
//     borderRadius: 2,
//     borderColor: '#E73536',
//     borderWidth: 1,
//     textAlign: 'center'
//   }
// })


// class TextInputUser extends React.Component
// {

// state = { borderColor: "grey"};

//   onFocus() {
//     this.setState({ borderColor: "skyblue" })
//   }
//   onBlur() {
//     this.setState({ borderColor:"grey"})
//   }

 
//   render() {
//     return (
//       <View>
//         <TextInput value={this.props.textvalue} onBlur={ () => this.onBlur() } onFocus={ () => this.onFocus() } textAlign={'center'} placeholder={this.props.placeholdername} style={{alignContent:"center",height:50,width:320,borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.borderColor}}></TextInput>
//      </View>
//     )}
// }
// class LoginScreen extends React.Component {


 

//   onFocus(inputholder) {
//     if(inputholder==="username")  
//   {
//   this.setState({ usernameborderColor : 'skyblue' })
//   }
//   else
//   {
//   this.setState({ passwordborderColor : 'skyblue' })

//   }
// }
//   onBlur(inputholder) {
//     if(inputholder==="username")  
//     {
//     this.setState({ usernameborderColor : 'grey' })
//     }
//     else
//     {
//     this.setState({ passwordborderColor : 'grey' })
  
//     }
//   }

//   constructor(props) {
//     super(props);
//     // state = { borderColor: "grey"};
//     this.state={username:"",
//     password:"",
//     usernameborderColor:"grey",
//     passwordborderColor:"grey",
//   status:"Provide username and password",
// statuscolor:"aqua"};

//     this.login = () =>
//     {
//       var usernames= this.state.username;
//       var passwords= this.state.password;
//       console.log(usernames);
//       console.log(passwords);
  
//      var result= fetch('http://10.0.3.2:3000/login', {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         "username": this.state.username,
//         "password": this.state.password
//       }),
//     }).then(response => {
//       console.log(response.json());
//       if(response.message="Incorrect")
//       {
//         this.setState({status:"Incorrect Username or Password"});
//         this.setState({statuscolor:"red"});
//       this.props.navigation.navigate( "drawerStack");

//       // this.props.navigation.navigate('Details');

//       }
//       else
//       {
//       this.setState({
//         username:'',
//         password:''
//       })

//     }
//     })
//     .catch((error) => {

 
//       console.error(error);
//     });
//     return result;
//   }


//   }


  
// // componentDidMount()
// // {
// //   this.login();
// // }


  
//   render() {

//     const { navigate } = this.props.navigation;
//     const { goBack } = this.props.navigation;

//     return (
//       <View style={{ flex: 1, alignItems: "center", backgroundColor:"#EEE", justifyContent: "center" }}>
        
//         {/* <TextInput   onBlur={ () => this.onBlur() } onFocus={ () => this.onFocus() } textAlign={'center'} placeholder="Username" style={{alignContent:"center",height:50,width:"70%",borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.borderColor}}></TextInput>
//         <TextInput  onBlur={ () => this.onBlur() } onFocus={ () => this.onFocus() } textAlign={'center'} placeholder="Password" style={{height:50,width:"70%",borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.borderColor}}></TextInput> */}

// <Text style={{marginBottom:10,color:this.state.statuscolor}}>{this.state.status}</Text>
// <TextInput value={this.state.username} onChangeText={(usernames) => this.setState({username:usernames})} onBlur={ () => this.onBlur("username") } onFocus={ () => this.onFocus("username") } textAlign={'center'} placeholder={this.props.placeholdername} style={{alignContent:"center",height:50,width:320,borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.usernameborderColor}}></TextInput>
// <TextInput value={this.state.password}  onChangeText={(passwords) => this.setState({password:passwords})}  onBlur={ () => this.onBlur("password") } onFocus={ () => this.onFocus("password") } textAlign={'center'} placeholder={this.props.placeholdername} style={{alignContent:"center",height:50,width:320,borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.passwordborderColor}}></TextInput>

// {/* <TextInputUser value={this.state.username} onChangeText={(usernames) => this.setState({username:usernames})} placeholdername="Username" />
// <TextInputUser value={this.state.password} onChangeText={(passwords) => this.setState({password:passwords})} placeholdername="Password" /> */}

//         <Button
//           title="Login"
//          style={[s.btn,s.btnSuccess]} onPress={this.login.bind(this)}

//           onClick={this.login.bind(this)}
//         />
//         {/* <Button title="Register" onPress={()=> navigate('Details')}></Button> */}
       

// {/* 
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         /> */}
//       </View>
//     );
//   }
// }

// // class Navbar extends React.Component
// // {
// //   render()
// //   {
// //     return (
   

  

// //     )
// //   }
// // }

class DetailsScreen extends React.Component {

  // alignItems: "center", justifyContent: "center" 

  constructor(props)
  {
    super(props);
    this.state={
      modalVisible:false,
      itemslist:[{
        name:"No any items in the list"
      }],
      status:''
    };
  this._loadItems = this._loadItems.bind(this);
  this._showmodal = this._showmodal.bind(this);


  }

  componentDidMount() {
    this._loadItems();
  }

  

 
  render() {

    const {navigate} = this.props.navigation;
    var result='';
  //   this.state.itemslist.map((value)=>
  // {
  //  result+=`<Button title="${value.name}" />`;
  // })
   
    return (
    
      // <ScrollView>
    <View style={{ flex: 1 ,
    justifyContent: 'flex-end'}}>
    <View style={{flex:1,justifyContent:'center',width:"100%"}}>

      <FlatList data={this.state.itemslist} renderItem={({item})=><Button onPress={()=> this._showmodal() } color="red"  title={item.name} />}
        // title={item.name} style={{ width:220,borderWidth:2,marginBottom:10,marginTop:100}}  />;
      keyExtractor={item => item.name}/>
  {/* {this.state.itemslist.map((value,index)=>
  {
return <Button title={value.name} style={{ width:220,borderWidth:2,marginBottom:10,marginTop:100}}  />;
  }) 
} */}
</View>
<Modal 
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }} >
            <View style={{justifyContent:'center',height:150,flex:1}}>
              <TouchableHighlight onPress={()=> this.setState({modalVisible:false})} >
            <Text style={{ width:100}}>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> this.setState({modalVisible:false})} >
            <Text style={{width:100}}>Ok</Text>
            </TouchableHighlight>
           
            </View>
          </Modal>
          

 <Button title="GO back"  style={{marginTop:15,backgroundColor:'red'}} onPress={()=> navigate('Home')} />
        
      </View>
      // </ScrollView>
    );

  }
  _loadItems()
  {
    // Stitch.initializeDefaultAppClient('digital-menu-gxnkk').then(client => {
    //   this.setState({ client });

    //   if(client.auth.isLoggedIn) {
    //     this.setState({ currentUserId: client.auth.user.id })
    //   }

     var client= Stitch.defaultAppClient;

    // Stitch.getAppClient('digital-menu-gxnkk').then(client => {
     var mongodb= client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
     this.db= mongodb.db("digital-menu");
     this.db.collection("items").find({},{limit:100}).asArray().then(doc=>{
       console.log(doc);
             this.setState({
        itemslist:doc,
        status:'true'
      })
     });
  // console.log(collectionresult);

    // collectionresult.find({},{}).then((doc)=>
    // {
    //   this.setState({
    //     itemslist:doc,
    //     status:'true'
    //   })
    // });
      //  })
    //  client.callFunction("myFunc").then(doc => {
    //       // console.log(doc);

    //       this.setState({
    //         itemslist:doc,
    //         status:'true'
    //       })
    //     })
        

        

    
      //  this.state.itemslist.map((key,value)=>
      //  {
      //    item+= `<Text>${key.name}</Text>`;
      //  })
      //  return item;
      
        //   {doc.map(function(a) {
        //     console.log(a.name);
        // })}
     
  
  }

  _showmodal()
  {
    this.setState({
      modalVisible:true
    })

    this.props.navigation.navigate('Waiter');
  }

  
}

class HomeIcon extends React.Component
{

  toggleDrawer = () => {
    //Props to open/close the drawer
    // this.props.navigation.toggleDrawer();
    this.props.navigation.openDrawer();

    // this.props.navigation.dispatch(DrawerActions.openDrawer())
  };

  render()
  {
    
  // const {navigate}= this.props.navigation;
  // const {navigate=this.props.navigationProps.toggleDrawer();
  

    
    return(
      <View>
        {/* <TouchableOpacity onPress={this.toggleDrawer.bind(this)}> */}


        <TouchableOpacity onPress={()=> this.toggleDrawer.bind(this)}>

          {/*Donute Button Image */}
          <Image
            source={require('./images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}


// const DrawerStack = createDrawerNavigator({
//   screen1: { screen: Screen1
//       },
//   screen2: { screen: Screen2 },
//   screen3: { screen: Screen3 },},
//   {
//   gesturesEnabled: true,
//   contentComponent: DrawerContainer

//     })


// const drawerButton = (navigation) =>
//     <Button
//       style={{padding: 5, color: 'white'}}
//       onPress={() => {
//         // Coming soon:
//         //  navigation.navigate('DrawerToggle');

//         const resetAction = StackActions.reset({
//           index: 0, 
//           key: null,
//           actions: [
//                NavigationActions.navigate({ routeName: 'loginStack' })
//           ],
//      });
//      navigation.dispatch(resetAction);
//      navigation.navigate('screen3');
//     // navigation.replace( "DrawerStack.screen2");

//         //  this.props.navigation.dispatch(DrawerActions.toggleDrawer())
//         // https://github.com/react-community/react-navigation/pull/2492
//         // if (navigation.state.index === 0) {
//         //   navigation.navigate('DrawerOpen')
//         // } else {
//         //   navigation.navigate('DrawerClose')
//         // }
//       }
//     } title="MENU"></Button>

// const DrawerNavigation = createStackNavigator({
//   DrawerStack: { screen: DrawerStack ,
//     navigationOptions: ({navigation}) => ({
//       headerStyle: {backgroundColor: 'green'},
//       headerLeft:drawerButton(navigation),
//       headerRight:<HomeIcon/>
      
//     })
//     } 
// }
// )

// // login stack
// const LoginStack = createStackNavigator({
//   loginScreen: { screen: LoginScreen },
//   detailsScreen: { screen: DetailsScreen },

// }, {
//   headerMode: 'float',
//   navigationOptions: {
//     headerStyle: {backgroundColor: 'red'},
//     title: 'You are not logged in'
//   }
// })

// // Manifest of possible screens
// const PrimaryNav = createStackNavigator({
//   loginStack: { screen: LoginStack },
//   drawerStack: { screen: DrawerNavigation }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   title: 'Main',
//   initialRouteName: 'loginStack',
  
// })

// // const AppNavigator = createStackNavigator({

// //   Home: {
// //     screen: LoginScreen,
// //     navigationOptions:{
// //       headerTitle:'Login',
// //       headerTintColor: 'red',
// //       headerStyle:{backgroundColor:"blue"},
// //       headerTitleStyle: {
// //         alignSelf: 'center',
// //         textAlign: "center",
// //         justifyContent: 'center',
// //         flex: 1,
// //         fontWeight: 'bold',
// //         textAlignVertical: 'center',color:"white"}
// //     },

// //   },
// //   Details:{
// //    screen: DetailsScreen,
// //    navigationOptions:{
// //     headerTitle:'Waiter App',
// //     headerLeft: <Text onPress={() => 
// //       navigation.navigate('DrawerOpen')}>Menu</Text>,
    
// //     headerStyle:{backgroundColor:"blue"},
// //     headerTitleStyle: {
// //       alignSelf: 'center',
// //       textAlign: "center",
// //       justifyContent: 'center',
// //       flex: 1,
// //       fontWeight: 'bold',
// //       textAlignVertical: 'center',color:"white"}

// //   } 
// //   }},
// //   {
// //     initialRouteName: "Home",
// //       headerTitle: 'Waiter App',
// //       headerLeft: <HomeIcon/>,
// //       headerStyle: {
// //         backgroundColor: '#e3e3e3',
// //       },
// //       headerTintColor: '#606070',
// //     },
  
// // );





// // const AppContainer= createAppContainer(AppNavigator);
// const AppContainer= createAppContainer(PrimaryNav);


// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }


import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
// import { ListItem,List} from 'react-native-elements';
import waiterapp from './waiter/waiterfirst';
import { StyleSheet, FlatList,Text,Modal,Alert,TouchableHighlight ,View,TextInput,Button,Header,Image,TouchableOpacity } from 'react-native';
import {createAppContainer,createStackNavigator,createDrawerNavigator,StackActions, NavigationActions,DrawerActions} from "react-navigation";
import { StitchClientConfiguration } from 'mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration';

const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
// import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';




class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentUserId: undefined,
      client: undefined
    };
    this._loadClient = this._loadClient.bind(this);
    this._onPressLogin = this._onPressLogin.bind(this);
    this._onPressLogout = this._onPressLogout.bind(this);
  }

  componentDidMount() {
    this._loadClient();
  }

  render() {
    let loginStatus = "Currently logged out."

    if(this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`
    }

    loginButton = <Button
                    onPress={this._onPressLogin}
                    title="Login"/>

    logoutButton = <Button
                    onPress={this._onPressLogout}
                    title="Logout"/>

    return (
      <View style={styles.container}>
        <Text> {loginStatus} </Text>
        {this.state.currentUserId !== undefined ? logoutButton : loginButton}
      </View>
    );
  }

  _loadClient() {
    // const stitchAppClient = Stitch.defaultAppClient;
    // const mongoClient = stitchAppClient.getServiceClient(
    //   RemoteMongoClient.factory,
    //   "mongodb-atlas"
    // );
    

    Stitch.initializeDefaultAppClient('digital-menu-gxnkk').then(client => {
    this.setState({ client });

    //  var mongoconnection= client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
    //  this.db= mongoconnection.db("digital_menu").collection("items").find({},{});


      if(client.auth.isLoggedIn) {
        this.setState({ currentUserId: client.auth.user.id })
      }
//         const mongoClient = client.getServiceClient(
//       RemoteMongoClient.factory,
//       "mongodb-atlas"
//     );

//     console.log("Shanit");
  
// });
//       tasks
//         .find({})
//         .asArray()
//         .then(docs => {
//           console.log(docs);
//         })
//         .catch(err => {
//           console.warn(err);
//         });
     
//     });
  })
}

  _onPressLogin() {
    this.state.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`Successfully logged in as user ${user.id}`);
        this.setState({ currentUserId: user.id })
        var client= Stitch.getAppClient('digital-menu-gxnkk');
    //  client.callFunction("myFunc").then(doc => {
    //       console.log(doc);
    //     //   {doc.map(function(a) {
    //     //     console.log(a.name);
    //     // })}
    //  })

    //     // doc= JSON.parse(doc.arg);
    //     // console.log(doc);
    //     doc=doc.arg;
    //     console.log(doc);
    //     console.log(doc.name);

    //       // doc.forEach(function(result)
    //       // {
    //       //   console.log(result.name);
    //       // })
    //     })
        this.props.navigation.navigate('Waiter');
    }).catch(err => {
        console.log(`Failed to log in anonymously: ${err}`);
        this.setState({ currentUserId: undefined })
    });
  }

  _onPressLogout() {
    this.state.client.auth.logout().then(user => {
        console.log(`Successfully logged out`);
        this.setState({ currentUserId: undefined })
    }).catch(err => {
        console.log(`Failed to log out: ${err}`);
        this.setState({ currentUserId: undefined })
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AppNavigator = createStackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions:{
      headerTitle:'Login',
      headerTintColor: 'red',
      headerStyle:{backgroundColor:"blue"},
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
        flex: 1,
        fontWeight: 'bold',
        textAlignVertical: 'center',color:"white"}
    },

  },
  Waiter:{
   screen: DetailsScreen,
   navigationOptions:{
    headerTitle:'Waiter App',
    headerLeft: <Text onPress={() => 
      this.props.navigation.navigate('DrawerOpen')}>Menu</Text>,
    
    headerStyle:{backgroundColor:"blue"},
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',color:"white"}

  } 
  }},
  {
    initialRouteName: "Home",
      headerTitle: 'Waiter App',
      headerLeft: <HomeIcon/>,
      headerStyle: {
        backgroundColor: '#e3e3e3',
      },
      headerTintColor: '#606070',
    },
  
);




const AppContainer= createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
