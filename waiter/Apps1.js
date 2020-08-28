import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
// import { ListItem,List} from 'react-native-elements';
// import DetailsScreen from './waiter/waiterfirst';
import { StyleSheet, FlatList,Text,Modal,Alert,TouchableHighlight ,Dimensions,View,TextInput,Button,Header,Image,ActivityIndicator} from 'react-native';

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

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { ScrollView } from 'react-native-gesture-handler';



//   import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
  


class Pendings extends React.Component
{
  constructor(props)
  {
    super(props);
    this._displaytotal= this._displaytotal.bind(this);
   
  }


  render()
  {
      var results;
console.log("THIs item pending");
console.log(this.props);
console.log("Item 0");
console.log(this.props[0]);
console.log("count is");
console.log(this.props.count);


    const {items}= this.props[this.props.count];
    items.map((key,value)=>
         {
           console.log("keys is");
           console.log(key);
           
            console.log("Total is");
             results+= <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>
 
 
             <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
             <Text style={{ color:'blue',  marginLeft:5}}>{key.name}</Text>
               
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>{key.price}</Text>
            
           
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>{key.quantity}</Text>
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>{key.total}</Text>
               </View>
                 </View>
 
        
           })
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

class Pendingitemlists extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props.pendinglist);

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
    console.log(this.props.pendinglist);
  
    }

  render()
  {
  
  
  console.log("Hello shailesh");
  console.log(this.props);
  console.log("Hello pranil");
var {_id,pending}= this.props[0];
var date= pending[parseInt(this.state.count,10)].date.toISOString().split('T')[0];
var date1=pending[parseInt(this.state.count,10)].date.toISOString().split('T')[1].split('.')[0];console.log(_id)
console.log("Hello pradeep");
console.log(date);
console.log("DATE is");

    return (
    <View>
        <FlatList data={_id.id} renderItem={({item,index})=>
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
      <Pendings {...pending} callback={this._increasecount} count={index} />

      
      </View>}
         
         listKey={(item,index)=> 'D'+ index.toString()} />
    
        </View>
   
    );
  }
getdate(index)
{
  var {_id,pending}= this.props[0];
var date= pending[parseInt(index,10)].date.toISOString().split('T')[0];

return date;
}
gettime(index)
{
  var {pending}= this.props[0];
  var date1=pending[parseInt(index,10)].date.toISOString().split('T')[1].split('.')[0];
  return date1;
}
}
  class Pending extends React.Component {

    constructor(props)
    {
      super(props);
      this.state={
        itemslist:[],
        status:false
      }

    this._loadItems = this._loadItems.bind(this);
    this.pendingitemlist = this.pendingitemlist.bind(this);
    this.partial = this.partial.bind(this);


    }
      static navigationOptions= {
          drawerLabel:'Logs'
      }

      componentDidMount() {

   
 
        this._loadItems();
  
      }  
    render() {


      

      
      return (


  

<View style={{flex:1,justifyContent:'center',width:"100%"}}>

{ this.state.status === true ? <Pendingitemlists {...this.state.itemslist} />:  <ActivityIndicator size="large" color="#0000ff" />  }

        {/* <FlatList data={this.state.itemslist} renderItem={({item})=>
        <View><View style={{ flex: 1, alignItems: "center", marginTop:5, justifyContent: "center" }}>
        
        <Text style={{marginBottom:10,color:'blue'}}>Time</Text>
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

          
         this.state.itemslist.map((key,value)=>
         {
            item+= ` <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>


            <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
            <Text style={{ color:'blue',  marginLeft:5}}>${key.name}</Text>
              
              </View>
              <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
              <Text style={{ color:'blue',  marginLeft:5}}>${key.price}</Text>
           
          
              </View>
              <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
              <Text style={{ color:'blue',  marginLeft:5}}>${key.quantity}</Text>
              </View>
              <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
              <Text style={{ color:'blue',  marginLeft:5}}>${key.total}</Text>
              </View> `;
         })
         return item;
     
      </View>
      </View>}
         
        keyExtractor={item => item}/> */}
     </View>
          
       
      );
    }



    partial()
    {
      console.log("item is");
      console.log(this.state.itemslist);
       var results;
      this.state.itemslist.map((key)=>
         {
           console.log("keys is");
           console.log(key);
           
            console.log("Total is");
             results+=  <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:0, borderWidth:1}}>
 
 
             <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
             <Text style={{ color:'blue',  marginLeft:5}}>Hello</Text>
               
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>${key.total}</Text>
            
           
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>${key.total}</Text>
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'blue',  marginLeft:5}}>${key.total}</Text>
               </View></View>
 
        
           })
           
           console.log("REsult is");
           console.log(results);
           console.log("REsult is");

         return results;

    }
    pendingitemlist()
    {

      console.log("Gone through");

   var result= <FlatList data={this.state.itemslist} renderItem={({item})=>
        <View><View style={{ flex: 1, alignItems: "center", marginTop:10, justifyContent: "center" }}>
        
        <Text style={{marginBottom:10,color:'blue'}}>Time</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:0, borderWidth:1}}>

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
      </View>}
         
         listKey={(item, index) => 'D' + index.toString()}/>
      
        // console.log("REsult is");
        // console.log(result);
        // console.log("REsult is");
        // return result;
        return result;
    }

    _loadItems()
    {
      
      const client = Stitch.defaultAppClient;

      console.log("logging in anonymously");
      client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`logged in anonymously as user ${user.id}`)

       var mongodb=client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
     this.db= mongodb.db("digital-menu");
    this.db.collection("tables").find({},{limit:100}).asArray().then(doc=>{
       console.log("HEllo");
      //  console.log(doc)
       console.log(doc);
       console.log("shai");
       var result= doc;

             this.setState({
               itemslist:result,
               status:true
        
    })

     console.log("After state chage pending is");
     console.log(this.state.itemslist);
     console.log("After state chage pending is");

  })
})
// })
  }
  }
  

  class Received extends React.Component {

    constructor(props)
    {
      super(props);
      this.state={
        itemlist:"No any items in the list"
      }
    }
      static navigationOptions= {
          drawerLabel:'Logs'
      }
    render() {
      return (

<View style={{flex:1,justifyContent:'center',width:"100%"}}>
        <FlatList data={this.state.itemslist} renderItem={({item})=>
        <View><View style={{ flex: 1, alignItems: "center", marginTop:5, justifyContent: "center" }}>
        
        <Text style={{marginBottom:10,color:'blue'}}>Time</Text>
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
      </View>}
         
        keyExtractor={item => item}/>
     </View>
          
       
      );
    }
  }
  
  class Logs extends React.Component {
    static navigationOptions= {
        drawerLabel:'Pending'
    }

    constructor(props)
    {
      super(props);
      this.state = {
     
        tableHead: ['Head1','Head2']
      }
    }

    render() {

      const state= this.state;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
      
        </Table>
        </View>
      );
    }
  }

  

  

//   export default createDrawerNavigator({
//     Logs: { screen: Logs},
//     Pending: { screen: Pending},
//     Received:{ screen: Received}
  
//   })

// var topnavigator= createMaterialTopTabNavigator({
//     Logs: { screen: Logs},
//     Pending: { screen: Pending},
//     Received:{ screen: Received}
  
//   }, {
//     initialRouteName: 'Logs',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#2196F3' },
//   });

// export default createDrawerNavigator(
//     {
//         Logs: { screen: Logs},
//         Pending: { screen: Pending},
//         Received:{ screen: Received}
//     },
//     {
//       drawerOpenRoute: 'DrawerOpen',
//       drawerCloseRoute: 'DrawerClose',
//       drawerToggleRoute: 'DrawerToggle',
    
//     },
//   );
  


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});


  
export default createMaterialTopTabNavigator({
  Logs: { screen: Logs},
  Pending: { screen: Pending},
  Received:{ screen: Received}

}, {
  initialRouteName: 'Logs',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#2196F3' },
});
