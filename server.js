const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');

const items=require('./routes/api/items');

require('dotenv').config();
const app=express();

//Bodyparser middleware

app.use(bodyParser.json());
app.use(cors());
//DB config

//Connect Mongo
const uri=process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully"); //checking for a succesfull connection
  })

// USe routes
//app.get('/', function(err, res){
 // res.send('Welcome')
//})
  app.use('/api',items)

  //serve static assest
  if(process.env.NODE_ENV=== 'production')
  {
    //setstatic folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));

    });
  }
  const port=process.env.PORT || 5000;
  app.listen(port,() => console.log(`Server Started on port ${port}`));

