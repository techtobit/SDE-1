const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const cors = require('cors');
let jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

//Middleware
app.use(express.static("public"));
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://Netclan_Task:Netclan_Task@netclan.p5hhjcj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
 try {
  await client.connect();
  const collection = client.db("test").collection("jsondatas");

  // JWT Login Auth
  app.post('/login', async (req, res) => {
   const user = req.body;
   console.log(user);
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: '1d'
   })
   console.log(accessToken);
   res.send(accessToken)
  })


  app.get('/data', async (req, res) => {
   const user = await collection.find({}).toArray();
   res.send(user)
  })

 } catch (error) {

 }

}
run().catch(console.dir)



app.get('/', (req, res) => {
 res.send('Hello World!')
})


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})