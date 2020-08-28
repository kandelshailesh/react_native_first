import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
// import { ListItem,List} from 'react-native-elements';
// import DetailsScreen from './waiter/waiterfirst';
import { StyleSheet, FlatList,Text,Modal,Alert,TouchableHighlight ,Dimensions,View,TextInput,Button,Header,Image,TouchableOpacity } from 'react-native';
import {createAppContainer,createStackNavigator,createDrawerNavigator,StackActions, NavigationActions,DrawerActions} from "react-navigation";
import { StitchClientConfiguration } from 'mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration';

// var client;

// const client1= stitch.Stitch.initializeDefaultAppClient('<your-app-id>');


const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
window.navigator.userAgent= 'react-native';
import io  from 'socket.io-client/dist/socket.io';
Stitch.initializeDefaultAppClient('digital-menu-gxnkk').then(client => {
  // use the client

  });


// export default class waiter1 extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//     }
    
// }

export default class DetailsScreen extends React.Component {

    // alignItems: "center", justifyContent: "center" 
  
    constructor(props)
    {
      super(props);
      this.state={
        modalVisible:false,
        itemslist:[{
          username:"No any items in the list",
          width:Dimensions.get('window').width
        }],
        client:'',
        status:''
      };
console.log("Condition");

// var client= Stitch.initializeDefaultAppClient('digital-menu-gxnkk');




    this._loadItems = this._loadItems.bind(this);
   

    this._showmodal = this._showmodal.bind(this);
      Dimensions.addEventListener('change',(e)=>
      {
        this.setState({width:e.window});
      })


      
  
    }
  
    componentDidMount() {

   
 
      this._loadItems();


      this.socket= io.connect('ws://10.0.3.2:4000',{jsonp:false});
      console.log("Hello");
      console.log(this.socket);
      this.socket.on('connect',()=>
      {
        console.log("connected shailesh");
      })
      this.socket.on('update',(doc)=> 
      {
        console.log('updated');
        // this.setState({modalVisible:true});
        this.setState({itemlist:doc})
      });

      this.socket.on('additem',()=> 
      {
// var client = Stitch.initializeDefaultAppClient('digital-menu-gxnkk');
var client=Stitch.initializeAppClient();

        var mongodb= client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
       this.db= mongodb.db("digital-menu");
       this.db.collection("items").find({},{limit:100}).asArray().then(doc=>{
         console.log(doc);
               this.setState({
          itemslist:doc,
          status:'true'
        })
       });
        console.log('itemadded');
        // this.setState({modalVisible:true});
      });
    }
    render() {
  
      const {navigate} = this.props.navigation;
      var result='';
  

      var alertbox=Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      var alertboxnull=<Text></Text>;
    //   this.state.itemslist.map((value)=>
    // {
    //  result+=`<Button title="${value.name}" />`;
    // })
     
      return (
      
        // <ScrollView>
      <View style={{ flex: 1 ,justifyContent: 'flex-end'}}>
      <View style={{flex:1,justifyContent:'center',width:"100%"}}>
  
      {/* // title={item.name} style={{ width:220,borderWidth:2,marginBottom:10,marginTop:100}}  />; */}
        <FlatList data={this.state.itemslist} renderItem={({item})=><Button onPress={()=> this._showmodal() } color="red"  title={item.username} />}
         
        keyExtractor={item => item.username}/>
    {/* {this.state.itemslist.map((value,index)=>
    {
  return <Button title={value.name} style={{ width:220,borderWidth:2,marginBottom:10,marginTop:100}}  />;
    }) 
  } */}
  </View>
  {this.state.modalVisible === true ? alertbox :  alertboxnull}
  {/* <Modal 
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }} style={{height:150,paddingTop:10,flexDirection:'column',alignItems:'stretch',textAlign:'center'}} >
              <View style={{justifyContent:'center',flex:1,flexDirection:'column',alignItems:'stretch'}}>
                <TouchableHighlight onPress={()=> this.setState({modalVisible:false})} >
              <Text>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight  onPress={()=> this.setState({modalVisible:false})} >
              <Text>Ok</Text>
              </TouchableHighlight>
             
              </View>
            </Modal> */}
            
  
   <Button title="GO back"  style={{marginTop:15,backgroundColor:'red'}} onPress={()=> navigate('Home')} />
          
        </View>
        // </ScrollView>
      );
  
    }

    _loadItems()
    {
    
  
    //  this.setState({
    //    client:Stitch.defaultAppClient
    //  })
      // this.state.client= Stitch.defaultAppClient;
      //  var client = Stitch.initializeAppClient('digital-menu-gxnkk');
     
        const client = Stitch.defaultAppClient;

        console.log("logging in anonymously");
        client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
          console.log(`logged in anonymously as user ${user.id}`)

         var mongodb=client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
       this.db= mongodb.db("digital-menu");
       this.db.collection("users").find({},{limit:100}).asArray().then(doc=>{
         console.log("HEllo");
        //  console.log(doc)
         console.log(doc);
         console.log("shai");

               this.setState({
          itemslist:doc,
          status:'true'
        })
       });
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