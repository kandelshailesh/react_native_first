import React from 'react'

import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
import InnerScreen from './waiter/horizontalnavbar1';
import { StyleSheet,ActivityIndicator,StatusBar,FlatList,Text,Modal,Alert,TouchableHighlight ,View,TextInput,Button,Image,TouchableOpacity,Dimensions} from 'react-native';
import {createAppContainer,createStackNavigator,createDrawerNavigator,StackActions, NavigationActions,DrawerActions} from "react-navigation";
import { StitchClientConfiguration } from 'mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration';

import Icon  from 'react-native-ionicons';




const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
},
  
  
   
});

class Brand extends React.Component
{

  render()
  {
    var listdata=['Home','Tables']
    return(
      <View> 
      <FlatList data={{listdata}} renderItem={({item})=>
        <TouchableHighlight  underlayColor="#EEE">
  <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>
             <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>{item}</Text>
               </View>
               </TouchableHighlight>
      }   keyExtractor={(item,index)=>'D'+index.toString()} />
      </View>
    )
  }
}
class HomeScreen extends React.Component {

  
  onFocus(inputholder) {
    if(inputholder==="username")  
  {
  this.setState({ usernameborderColor : 'skyblue' })
  }
  else
  {
  this.setState({ passwordborderColor : 'skyblue' })

  }
}
  onBlur(inputholder) {
    if(inputholder==="username")  
    {
    this.setState({ usernameborderColor : 'grey' })
    }
    else
    {
    this.setState({ passwordborderColor : 'grey' })
  
    }
  }

  constructor(props) {
    super(props);
    this.state={
      currentUserId: undefined,
      client: undefined,
      username:'',
      password:'',
          usernameborderColor:"grey",
    passwordborderColor:"grey",
  status:"Provide username and password",
statuscolor:"black",
clicked:false
    };
    this._loadClient = this._loadClient.bind(this);

  
    this.onFocus = this.onFocus.bind(this);
    this.login= this.login.bind(this);
    this.onBlur= this.onBlur.bind(this);

  }

  componentDidMount() {
    // this._loadClient();
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#0D47A1")
  }

  render() {
    let loginStatus = "Currently logged out."

    if(this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`
    }

 
    return (

 
      <View style={{ flex: 1, alignItems: "center", backgroundColor:"#EEE", justifyContent: "center" }}>
        
      <Text style={{marginBottom:10,color:this.state.statuscolor}}>{this.state.status}</Text>
    <TextInput  value={this.state.username} onChangeText={(usernames) => this.setState({username:usernames})} onBlur={ () => this.onBlur("username") } onFocus={ () => this.onFocus("username") } textAlign={'center'} placeholder="Username" style={{alignContent:"center",height:50,width:320,borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.usernameborderColor}}></TextInput>
      <TextInput secureTextEntry={true} value={this.state.password}  onChangeText={(passwords) => this.setState({password:passwords})}  onBlur={ () => this.onBlur("password") } onFocus={ () => this.onFocus("password") } textAlign={'center'} placeholder="Password" style={{alignContent:"center",height:50,width:320,borderWidth:1,borderRadius:5,marginBottom:5,borderColor:this.state.passwordborderColor}}></TextInput>
      
      <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      

      <TouchableHighlight 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>
           <Button
             color="#1565C0"   title="Login" onPress={this.login.bind(this)} onClick={this.login.bind(this)}
              
    />
          </TouchableHighlight> 

        {this.state.clicked === false ? <Text></Text> :  <ActivityIndicator size="large" color="#0000ff" />}
     
          </View>
     
       
      
    );
  }

  login()
  {
      var usernames= this.state.username;
      var passwords= this.state.password;
      console.log(usernames);
      console.log(passwords);

      this.setState({
        clicked:true
      });
  
     var result= fetch('http://10.0.3.2:4000/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      }),
    }).then(response => {
      console.log(response.json());
      if(response.status===500)
      {
        console.log("Errror");
        this.setState({status:"Incorrect Username or Password"});
        this.setState({statuscolor:"red",clicked:false});
      // this.props.navigation.navigate( "drawerStack");

      // this.props.navigation.navigate('Details');

      }
      else
      {
      this.setState({
        username:'',
        password:''
      })
      console.log("Successfully login");
      this.props.navigation.navigate('Waiter');
      console.log("Successfully login");

      // this.props.navigation.navigate('Details');

    }
    })
    .catch((error) => {

 
      console.error(error);
    });
    return result;

  }

  _loadClient() {
 
    

    Stitch.initializeDefaultAppClient('digital-menu-gxnkk').then(client => {
    this.setState({ client });


      if(client.auth.isLoggedIn) {
        this.setState({ currentUserId: client.auth.user.id })
      }
     
})
  }
}
  
const RootStack = createDrawerNavigator(
  {
    Home:HomeScreen,
    Waiter:InnerScreen
  },
  {
      navigationOptions: {
    headerStyle : {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle : {
      color: 'white',
      },
     },
   }
  );
// const DrawerNavigator= createDrawerNavigator({
//   Home:HomeScreen,
//   Waiter:InnerScreen
// })  
const AppNavigator1 = createStackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions:({navigation})=>({
      headerLeft:<TouchableHighlight onPress={() => 
        navigation.openDrawer()} underlayColor="red"><Icon android="md-menu" ios="ios-menu" style={{fontSize: 20, marginLeft:15, color: 'white'}} /></TouchableHighlight>,
      headerTitle:'Login',
      headerTintColor: 'red',
      headerStyle:{backgroundColor:"#1565C0"},
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
        flex: 1,
        fontWeight: 'bold',
        textAlignVertical: 'center',color:"white"}
      })
    },
  })

  const AppNavigator2= createStackNavigator({
  
  Waiter:{
   screen:InnerScreen,

   navigationOptions:({navigation})=>({
    headerTitle:'Waiter App',
    headerLeft: 
<TouchableHighlight onPress={() => 
  navigation.openDrawer()} underlayColor="red"><Icon android="md-menu" ios="ios-menu" style={{fontSize: 20, marginLeft:15, color: 'white'}} /></TouchableHighlight>,

    
    headerStyle:{backgroundColor:"#1565C0"},
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',color:"white"}

  }) 
  }})




class HomeIcon extends React.Component
{


  render()
  {
    
  // const {navigate}= this.props.navigation;
  // const {navigate=this.props.navigationProps.toggleDrawer();
  

    
    return(
      <View>
        {/* <TouchableOpacity onPress={this.toggleDrawer.bind(this)}> */}


        <TouchableOpacity onPress={()=> this.props.navigate.openDrawer}>

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


const AppNavigators= createDrawerNavigator({
Home:AppNavigator1,

Waiter:{
  screen:AppNavigator2
},
},
{
  //For the Custom sidebar menu we have to provide our CustomSidebarMenu
 
  //Sidebar width
  drawerWidth: Dimensions.get('window').width - 160,
  drawerLockMode:'unlocked',
  drawerPosition:'left'
}
)



const AppStack = createStackNavigator({
  Drawer: { screen: AppNavigators },

}, {
  headerMode: 'none',
});


const AppContainer= createAppContainer(AppStack);


export default class Apps extends React.Component {
  render() {
    return <AppContainer />;
  }
}
