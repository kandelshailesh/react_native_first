import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential,RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
// import { ListItem,List} from 'react-native-elements';
// import DetailsScreen from './waiter/waiterfirst';
import { StyleSheet, FlatList,Text,TouchableOpacity,Modal,Alert,TouchableHighlight ,Dimensions,View,TextInput,Button,Header,Image,ActivityIndicator} from 'react-native';

import {createAppContainer,createStackNavigator,createDrawerNavigator,StackActions, NavigationActions,DrawerActions,createMaterialTopTabNavigator} from "react-navigation";

import Icon  from 'react-native-ionicons';

import { Table, Row, Rows } from 'react-native-table-component';

import {Received,Receiveds,Receiveditemlist} from './receivedtab'


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
    this.handlepenrec= this.handlepenrec.bind(this);
    this.handleconfirm= this.handleconfirm.bind(this);

  }

  handleconfirm(id,count)
  {
    const client = Stitch.defaultAppClient;
console.log("GOt conformed");
    console.log("logging in anonymously");
    client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
      console.log(`logged in anonymously as user ${user.id}`)

     var mongodb=client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
   this.db= mongodb.db("digital-menu");
  this.db.collection("tables").find({"pending":{$elemMatch:{"items":{$elemMatch:{"_id":id}}}}},{"projection":{"pending":1,"_id":0},limit:100}).toArray().then(doc=>{


    var pendingarraydata= doc[0].pending[Number.parseInt(count,10)];

      console.log(doc);
      console.log("Table35");
      console.log(pendingarraydata);
      this.db.collection("tables").updateOne({"table":3},{"$push":{"reveived":pendingarraydata}});


      console.log("Table5");
      console.log(id);

      // this.db.collection("tables").updateOne({"table":3},{$pull : {"pending":{$elemMatch:{"items":{$elemMatch:{"_id":id}}}}}})

      this.db.collection("tables").updateOne({"table":3},{"$unset" : {"pending.$.items.$._id":ObjectID("5c8fac41eacc1f0d192637fc")}}).then(function(doc){
  
        console.log("UPdated successfully");
        console.log(doc);
      }).catch((err)=>console.log(err))
      // this.db.collection("tables").deleteOne({"pending":{$elemMatch:{"items":{$elemMatch:{"_id":id}}}}});
      console.log("Table6");

      // this.db.collection("tables").updateOne({"reveived":pendingarraydata},{"table":3});

        }
    )

 
  })
  }
  handlepenrec(id,count)
  {
  var alertbox=Alert.alert(
    'Item Verification',
    'Did order placed?',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => this.handleconfirm(id,count)},
    ],
    {cancelable: false},
  );
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
<TouchableHighlight onPress={()=>this.handlepenrec(item._id,count)}  underlayColor="#EEE">
  <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>
             <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
             <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>{item.name}</Text>
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>{item.price}</Text>
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>{item.quantity}</Text>
               </View>
               <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
               <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>{item.total}</Text>
               </View>
               </View>
               </TouchableHighlight>
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
var {pending}= this.props[0];
var date= pending[parseInt(this.state.count,10)].date.toISOString().split('T')[0];
// var date1=pending[parseInt(this.state.count,10)].date.toISOString().split('T')[1].split('.')[0];console.log(_id)
console.log("Hello pradeep");
console.log(date);
console.log("DATE is");
console.log("PENDING IS");
console.log(pending.length);

    return (
    <View style={{flex:1,marginTop:10}}>
     
        <FlatList data={pending} renderItem={({item,index})=>
        <View>
          <View style={{ flex: 1, alignItems: "center", marginTop:10, justifyContent: "center" }}>
        
        <Text style={{marginBottom:10,color:'rgba(0,0,0,0.65)'}}>Date: {this.getdate(index)} {this.gettime(index)}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>

        <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
        <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Name</Text>
          
          </View>
          <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
          <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Price</Text>
       
      
          </View>
          <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
          <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Quantity</Text>
          </View>
          <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
          <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Total</Text>
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
  var {pending}= this.props[0];
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
        status:false,
        length:0
      }

    this._loadItems = this._loadItems.bind(this);
    this.pendingitemlist = this.pendingitemlist.bind(this);
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

{ this.state.status === true && Number.parseInt(this.state.length,10) >0 ? <Pendingitemlists {...this.state.itemslist} />:  <ActivityIndicator size="large" color="#0000ff" />  }

       
     </View>
          
       
      );
    }



    partial()
    {
     
    }
    pendingitemlist()
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
  

      
      console.log("DOC is");
      console.log(doc);
      
       var result= doc;

       if(doc.length>0)
       {
         if(doc[0].pending.length>0)
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
          status:false,

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
      //  var length= doc[0].pending.length;

       console.log("Length is");
       console.log(doc.length);

       
   
     console.log(this.state.itemslist);
     console.log("After state chage pending is");

  })
})
// })
  }
  }
  

//   class Received extends React.Component {

//     constructor(props)
//     {
//       super(props);
//       this.state={
//         itemlist:"No any items in the list"
//       }
//     }
//       static navigationOptions= {
//           drawerLabel:'Logs'
//       }
//     render() {
//       return (

// <View style={{flex:1,justifyContent:'center',width:"100%"}}>
//         <FlatList data={this.state.itemslist} renderItem={({item})=>
//         <View><View style={{ flex: 1, alignItems: "center", marginTop:5, justifyContent: "center" }}>
        
//         <Text style={{marginBottom:10,color:'rgba(0,0,0,0.65)'}}>Time</Text>
//         </View>
//         <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:1}}>


//         <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
//         <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Name</Text>
          
//           </View>
//           <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
//           <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Price</Text>
       
      
//           </View>
//           <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
//           <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Quantity</Text>
//           </View>
//           <View style={{ flex: 1, marginLeft:5, justifyContent:'space-between',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
//           <Text style={{ color:'rgba(0,0,0,0.65)',  marginLeft:5}}>Total</Text>
//           </View>
      
//       </View>
//       </View>}
         
//         keyExtractor={item => item}/>
//      </View>
          
       
//       );
//     }
//   }
  
  class Logs extends React.Component {
    static navigationOptions= {
        drawerLabel:'Pending'
    }

    constructor(props)
    {
      super(props);
      this.state = {    
        logslist:[],
        tableHead: ['Head1','Head2']
      }

      this._loadlogs= this._loadlogs.bind(this);
    }

    componentWillMountMount()
    {
      this._mounted = true;
      if(this._mounted)
      {
     this._loadlogs();
    }
  }
  componentWillUnmount()
  {   this._mounted = false;
 

  }

    render() {

      const state= this.state;
      return (
         <FlatList data={this.state.tableHead} renderItem={({item})=>
         <View>
        <View style={{ flex: 1,flexDirection: "row",backgroundColor:"#ffe",alignItems: "flex-start", marginTop:3, justifyContent: "center", alignSelf: "stretch", borderColor:'#EEE', marginBottom:5, borderWidth:2}}>

        <View style={{ flex: 1,marginBottom:3,marginTop:3,marginLeft:10,padding:5,justifyContent:'flex-start',padding:10, alignSelf: 'stretch',flexDirection:'row' }}>
 
      <TouchableOpacity style={{backgroundColor:"red",borderRadius:50,width:70,height:70,borderWidth:2,borderColor:"#ddd"}}><Text style={{color:'rgba(255,255,255,1)', marginTop:20,marginLeft:8}}>Table1</Text></TouchableOpacity><Text style={{marginTop:23,marginLeft:10}}>Ordered Itemname *</Text><TouchableOpacity style={{backgroundColor:"red",borderRadius:50,width:60,height:60,borderWidth:2,borderColor:"#ddd",marginLeft:10,marginTop:5}}><Text style={{color:'rgba(255,255,255,1)', marginTop:20,fontWeight:"bold",fontSize:15,marginLeft:20}}>10</Text></TouchableOpacity>


          </View>
      
        
      </View>
       
      
      </View>}
        
         
        keyExtractor={(item,index)=>'D'+index.toString()}
     

      />
      
      );
    }

    _loadlogs()
    {
      const client = Stitch.defaultAppClient;

      console.log("logging in anonymously");
      client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`logged in anonymously as user ${user.id}`)

       var mongodb=client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
     this.db= mongodb.db("digital-menu");
    this.db.collection("tables").find({},{"tableno":1,"pending":1,"reveived":1,limit:100}).toArray().then(doc=>{
      console.log("DOC is");
      console.log(doc);
      
       var result= doc;

       if(doc.length>0)
       {
         if(doc[0].pending.length>0)
         {
         this.setState({
          logslist:result,
              length:1,
              status:true

         })
       }
       else
       {
        this.setState({
          length:0,
          status:false,

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
      //  var length= doc[0].pending.length;

       console.log("Length is");
       console.log(doc.length);

       
   
     console.log(this.state.itemslist);
     console.log("After state chage pending is");

  })
})
// })
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
