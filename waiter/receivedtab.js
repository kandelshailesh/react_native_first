import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
// import { ListItem,List} from 'react-native-elements';
// import DetailsScreen from './waiter/waiterfirst';
import { StyleSheet, FlatList,Text,TouchableOpacity,Modal,Alert,TouchableHighlight ,Dimensions,View,TextInput,Button,Header,Image,ActivityIndicator} from 'react-native';

import {createAppContainer,createStackNavigator,createDrawerNavigator,StackActions, NavigationActions,DrawerActions,createMaterialTopTabNavigator} from "react-navigation";

import Icon  from 'react-native-ionicons';

import { Table, Row, Rows } from 'react-native-table-component';

import { StitchClientConfiguration } from 'mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration';

// var client;



// const client1= stitch.Stitch.initializeDefaultAppClient('<your-app-id>');


const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
window.navigator.userAgent= 'react-native';
import io  from 'socket.io-client/dist/socket.io';

Stitch.initializeDefaultAppClient('digital-menu-gxnkk').then(client => {
    // use the client
  
    });
  
class Receiveds extends React.Component
{
  constructor(props)
  {
    super(props);
    this._displaytotal= this._displaytotal.bind(this);
   
  }


  render()
  {
            return (
            
              <View>
          {this._displaytotal()}
          
          </View>
            )
          }
       
_displaytotal()
{

  console.log("SDS");
  console.log(this.props.count);
  console.log(this.props);
  var count= this.props.count;

  var {items}= this.props[count];
  // items= [items[Number.parseInt(count, 10)]];
  console.log("ITEM IS");
  console.log(count);
// items=[items[0]];
  console.log(items)
  console.log("ITEM NAME");
  // console.log(items[0].name)

return <FlatList data={items} renderItem={({item})=>

  <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>
 
 
             <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
             <Text style={{ color:'blue',  marginLeft:5}}>{item.name}</Text>
               
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>{item.price}</Text>
            
           
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>{item.quantity}</Text>
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>{item.total}</Text>
               </View>
                 </View>
        }
         
        keyExtractor={(item,index)=>'D'+index.toString()}
     

      />
        }    


  }

class Receiveditemlists extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props.reveivedlist);

    this.state={count:0};
    this._increasecount= this._increasecount.bind(this);
    this.getdate= this.getdate.bind(this);
    this.gettime= this.gettime.bind(this);
  }

_increasecount()
{
  this.setState({
    count:count+1
  })
  return this.state.count;
}
  componentDidMount()
    {
    console.log(this.props.reveivedlist);
  
    }

  render()
  {
  
  
  console.log("Hello shailesh");
  console.log(this.props);
  console.log("Hello pranil");
var {reveived}= this.props[0];
var date= reveived[parseInt(this.state.count,10)].date.toISOString().split('T')[0];
var date1=reveived[parseInt(this.state.count,10)].date.toISOString().split('T')[1].split('.')[0];
// console.log(_id)
console.log("Hello pradeep");
console.log(date);
console.log("Reveived length");
console.log(reveived.length);
    return (
    <View>
        <FlatList data={reveived} renderItem={({item,index})=>
        <View><View style={{ flex: 1, alignItems: "center", marginTop:10, justifyContent: "center" }}>
        
        <Text style={{marginBottom:10,color:'blue'}}>Date: {this.getdate(index)} {this.gettime(index)}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>

        <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
        <Text style={{ color:'blue',  marginLeft:5}}>Name</Text>
          
          </View>
          <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
          <Text style={{ color:'blue',  marginLeft:5}}>Price</Text>
       
      
          </View>
          <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
          <Text style={{ color:'blue',  marginLeft:5}}>Quantity</Text>
          </View>
          <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
          <Text style={{ color:'blue',  marginLeft:5}}>Total</Text>
          </View>
       
      </View>
      <Receiveds {...reveived} callback={this._increasecount} count={index} />

      
      </View>}
         
         listKey={(item,index)=> 'D'+ index.toString()} />
    
        </View>
   
    );
  }
getdate(index)
{
  var {reveived}= this.props[0];
var date= reveived[parseInt(index,10)].date.toISOString().split('T')[0];

return date;
}
gettime(index)
{
  var {reveived}= this.props[0];
  var date1=reveived[parseInt(index,10)].date.toISOString().split('T')[1].split('.')[0];
  return date1;
}
}
 class Received extends React.Component {

    constructor(props)
    {
      super(props);
      this.state={
        itemslist:[],
        status:false,
        length:0,
        status1:''
      }

    this._loadItems = this._loadItems.bind(this);
    this.reveiveditemlist = this.reveiveditemlist.bind(this);
    this.partial = this.partial.bind(this);


    }
      static navigationOptions= {
          drawerLabel:'Logs'
      }

      // componentDidMount() {

   
 
      //   this._loadItems();
  
      // }  
    render() {


      

      
      return (


  

<View style={{flex:1,width:"100%"}}>
<View style={{ height:50,backgroundColor:'#2196F3',flexDirection: "row",justifyContent:'flex-start', alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>
 
 
 <View style={{ flex: 1, marginLeft:5, justifyContent:'center',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
   <TouchableOpacity onPress={()=>this._loadItems(3)}>
      <Text style={{ color:'white',  marginLeft:5}}>Table1</Text>
   </TouchableOpacity>
   </View>
   <View style={{ flex: 1, marginLeft:5, justifyContent:'center',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
     <TouchableOpacity onPress={()=>this._loadItems(2)} >
   <Text style={{ color:'white',  marginLeft:5}}>Table2</Text>

     </TouchableOpacity>


   </View>
   </View>

{ this.state.status === true ? <Receiveditemlists {...this.state.itemslist} />:  <ActivityIndicator size="large" color="#0000ff" />  }

       
     </View>
          
       
      );
    }



    partial()
    {
     
    }
    reveiveditemlist()
    {

     
    }

    _loadItems(tableno)
    {
      
      const client = Stitch.defaultAppClient;

      console.log("logging in anonymously");
      client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`logged in anonymously as user ${user.id}`)

       var mongodb=client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
     this.db= mongodb.db("digital-menu");
    this.db.collection("tables").find({'table':tableno},{limit:100}).toArray().then(doc=>{
  
       var result= doc;
       console.log("From received");
       console.log(doc);
       if(doc.length>0)
       {
         if(doc[0].reveived.length>0)
         {
           this.setState({
             itemslist:result,
             length:1,
             status:true
           })
         }
         else
         {
           this.setState({
             length:0,
             status:false
           })
         }
       }
       else
       {
        this.setState({
          length:0,
          status:false
        })
       }
     
   
       
     console.log(this.state.itemslist);
     console.log("After state chage reveived is");

  })
  .catch((err)=>{
      this.setState({
        status1:'Check your internet connection',
        status:false
      })

  })
})
// })
  }
  }

  export{
      Receiveds,
      Receiveditemlists,
      Received
  }