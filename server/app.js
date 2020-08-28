const express = require('express');
const app = express();
// const server= require('http').createServer(app);
const MongoDB = require('mongodb-stitch-server-services-mongodb-remote');
var socket= require('socket.io');

var bodyParser= require('body-parser');
var server= app.listen(4000,function()
{
	console.log("Listening to the port 4000");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const {
    Stitch, 
    AnonymousCredential,
} = require('mongodb-stitch-server-sdk');


const client = Stitch.initializeDefaultAppClient('digital-menu-gxnkk');
var mongodb= client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
var db= mongodb.db("digital-menu");
client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    console.log(user);

    
    db.collection("tables").updateMany({"table":3},{"$pull" : {"pending":0}}).then(function(doc){
  
        console.log("UPdated successfully");
        console.log(doc);
      }).catch((err)=>console.log(err))
    // client.close();
}).catch(err => {
    console.log(err);
    client.close();
})

// const io = require('socket.io')(3005, {
//     path: '/test',
//     serveClient: false,
//     // below are engine.IO options
//     pingInterval: 10000,
//     pingTimeout: 5000,
//     cookie: false
//   });
const io= socket(server);
// console.log(io);
// var bodyParser = require('body-parser');
// // server.listen(3000);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));

app.get('/hello',function(req,res)
{
    res.sendFile(__dirname+'/index.html')
})

app.post('/login',function(req,res)
{
   var username= req.body.username;
   var password= req.body.password;

   console.log(username);
   console.log(password);

   client.callFunction("myFunc").then(result => {
    console.log(result) // Output: 7
});
   db.collection("users").find({username:username,password:password}).toArray().then((doc)=>
    {
        console.log(doc);
        console.log(doc.length);
    if(doc.length===1)
    {
        console.log("Successfully login");
        db.collection("tables").find({},{limit:100}).asArray().then(doc=>{
            console.log(doc);
            doc.map(function(i,result){
                var k=i.pending;
                console.log("pending");
                console.log(k);
k.map(function(j,results)
{
    console.log("Total");
    console.log(j.total);
    
})
                

            })

            })
    
        res.status(200).json({'message':'Correct'});
    }
    else
    {
        res.status(500).json({'message':'Incorrect'});

        console.log("Invalid username or password");
    }
    
})

})

io.on('connection',function(socket){
	console.log('made socket connection');
	// socket.on('chat',function(data)
	// {
	// 	console.log(data);
	// 	io.sockets.emit('chat',data);
	// });

	// socket.on('typing',function(data)
	// {
	// 	io.sockets.emit('typing',data);
	// });


    socket.on('update',()=>
        {
            console.log("Hello");
            io.emit('update');
        })
        socket.on('additem',(itemname)=>
        {
            console.log("Hello");
            console.log(itemname.itemname);
            // var client= Stitch.defaultAppClient;

  
    //   Stitch.getAppClient('digital-menu-gxnkk').then(client => {
   

       db.collection("items").insertOne({name:itemname.itemname}).then(()=>{
        
    console.log("Added");
})
        db.collection("items").find({},{limit:100}).asArray().then(doc=>{
            io.emit('additem',{doc});
            })
           });
    
        
       
        


        })



// io.on("connection",function(socket)
// {
//     console.log(socket.id);
//     socket.on('update',()=>
//     {
//         console.log("Hello");
//         io.emit('update');
//     })
// })


// app.listen(3000, () =>
//     console.log('Listening on port 3000')
// )
